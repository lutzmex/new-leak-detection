# Windows Optimization Script
# File: scripts/optimize-windows.ps1

param(
    [switch]$Deep,
    [switch]$Verbose
)

Write-Host "Starting Windows Optimization for Next.js Project..." -ForegroundColor Green

# Function to show file sizes
function Get-FolderSize {
    param([string]$Path)
    if (Test-Path $Path) {
        $Size = (Get-ChildItem $Path -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
        return [math]::Round($Size / 1MB, 2)
    }
    return 0
}

# Show initial sizes
Write-Host "`n=== Initial Project Sizes ===" -ForegroundColor Cyan
$NodeModulesSize = Get-FolderSize "node_modules"
$NextSize = Get-FolderSize ".next"
$TotalSize = $NodeModulesSize + $NextSize

Write-Host "node_modules: $NodeModulesSize MB" -ForegroundColor Yellow
Write-Host ".next: $NextSize MB" -ForegroundColor Yellow
Write-Host "Total: $TotalSize MB" -ForegroundColor White

# Clean cache and temporary files
Write-Host "`n=== Cleaning Cache and Temporary Files ===" -ForegroundColor Cyan

$CleanedItems = @()

# Clean Next.js cache
if (Test-Path ".next/cache") {
    Remove-Item ".next/cache" -Recurse -Force -ErrorAction SilentlyContinue
    $CleanedItems += ".next/cache"
}

# Clean node_modules cache
if (Test-Path "node_modules/.cache") {
    Remove-Item "node_modules/.cache" -Recurse -Force -ErrorAction SilentlyContinue
    $CleanedItems += "node_modules/.cache"
}

# Clean npm cache
try {
    npm cache clean --force 2>$null
    $CleanedItems += "npm cache"
} catch {
    Write-Host "Could not clean npm cache" -ForegroundColor Yellow
}

# Clean temporary files
$TempFiles = @("*.tmp", "*.log", "*.temp")
foreach ($Pattern in $TempFiles) {
    $Files = Get-ChildItem -Path "." -Include $Pattern -Recurse -ErrorAction SilentlyContinue
    if ($Files.Count -gt 0) {
        $Files | Remove-Item -Force -ErrorAction SilentlyContinue
        $CleanedItems += "$($Files.Count) $Pattern files"
    }
}

if ($CleanedItems.Count -gt 0) {
    Write-Host "Cleaned:" -ForegroundColor Green
    foreach ($Item in $CleanedItems) {
        Write-Host "  ✓ $Item" -ForegroundColor White
    }
} else {
    Write-Host "No cache files to clean" -ForegroundColor Green
}

# Optimize dependencies
Write-Host "`n=== Optimizing Dependencies ===" -ForegroundColor Cyan

# Check for unused dependencies
Write-Host "Checking for unused dependencies..." -ForegroundColor Yellow
try {
    $Package = Get-Content "package.json" | ConvertFrom-Json
    $Dependencies = $Package.dependencies.PSObject.Properties.Name
    $DevDependencies = if ($Package.devDependencies) { $Package.devDependencies.PSObject.Properties.Name } else { @() }
    
    Write-Host "Total dependencies: $($Dependencies.Count + $DevDependencies.Count)" -ForegroundColor White
    Write-Host "  Production: $($Dependencies.Count)" -ForegroundColor Green
    Write-Host "  Development: $($DevDependencies.Count)" -ForegroundColor Yellow
} catch {
    Write-Host "Could not analyze dependencies" -ForegroundColor Red
}

# Optimize package-lock.json
if (Test-Path "package-lock.json") {
    Write-Host "Optimizing package-lock.json..." -ForegroundColor Yellow
    try {
        npm install --package-lock-only 2>$null
        Write-Host "  ✓ package-lock.json optimized" -ForegroundColor Green
    } catch {
        Write-Host "Could not optimize package-lock.json" -ForegroundColor Yellow
    }
}

# Deep optimization (if requested)
if ($Deep) {
    Write-Host "`n=== Deep Optimization ===" -ForegroundColor Cyan
    
    # Reinstall dependencies for optimization
    Write-Host "Reinstalling dependencies for optimization..." -ForegroundColor Yellow
    try {
        Remove-Item "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
        Remove-Item "package-lock.json" -Force -ErrorAction SilentlyContinue
        
        npm install --prefer-offline --no-audit --progress=false
        Write-Host "  ✓ Dependencies reinstalled" -ForegroundColor Green
    } catch {
        Write-Host "Could not reinstall dependencies" -ForegroundColor Red
    }
    
    # Run production build
    Write-Host "Creating optimized production build..." -ForegroundColor Yellow
    try {
        $env:NODE_ENV = "production"
        npm run build 2>$null
        Write-Host "  ✓ Production build created" -ForegroundColor Green
    } catch {
        Write-Host "Production build failed" -ForegroundColor Red
    }
}

# Optimize Next.js configuration
Write-Host "`n=== Checking Next.js Optimization ===" -ForegroundColor Cyan

$OptimizationTips = @()

# Check if compression is enabled
$NextConfig = Get-Content "next.config.ts" -Raw
if ($NextConfig -match "compress:\s*true") {
    Write-Host "  ✓ Compression enabled" -ForegroundColor Green
} else {
    $OptimizationTips += "Enable compression in next.config.ts"
}

# Check if source maps are disabled in production
if ($NextConfig -match "productionBrowserSourceMaps:\s*false") {
    Write-Host "  ✓ Production source maps disabled" -ForegroundColor Green
} else {
    $OptimizationTips += "Disable productionBrowserSourceMaps for better performance"
}

# Check image optimization
if ($NextConfig -match "images:\s*{") {
    Write-Host "  ✓ Image optimization configured" -ForegroundColor Green
} else {
    $OptimizationTips += "Configure image optimization settings"
}

# Windows-specific optimizations
Write-Host "`n=== Windows-Specific Optimizations ===" -ForegroundColor Cyan

# Set Node.js memory limit for Windows
$CurrentNodeOptions = $env:NODE_OPTIONS
if ($CurrentNodeOptions -notmatch "--max-old-space-size") {
    $env:NODE_OPTIONS = "--max-old-space-size=4096"
    Write-Host "  ✓ Node.js memory limit set to 4GB" -ForegroundColor Green
} else {
    Write-Host "  ✓ Node.js memory limit already configured" -ForegroundColor Green
}

# Check Windows Defender exclusions
Write-Host "Checking Windows Defender exclusions..." -ForegroundColor Yellow
$ProjectPath = (Get-Location).Path
try {
    $Exclusions = Get-MpPreference | Select-Object -ExpandProperty ExclusionPath
    if ($Exclusions -contains $ProjectPath -or $Exclusions -contains "$ProjectPath\node_modules") {
        Write-Host "  ✓ Project excluded from Windows Defender" -ForegroundColor Green
    } else {
        $OptimizationTips += "Consider excluding project from Windows Defender for faster builds"
        $OptimizationTips += "Run: Add-MpPreference -ExclusionPath '$ProjectPath\node_modules'"
    }
} catch {
    Write-Host "  Could not check Windows Defender settings" -ForegroundColor Yellow
}

# File system optimization
Write-Host "`n=== File System Optimization ===" -ForegroundColor Cyan

# Check for long path support
try {
    $LongPathEnabled = Get-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -ErrorAction SilentlyContinue
    if ($LongPathEnabled.LongPathsEnabled -eq 1) {
        Write-Host "  ✓ Long path support enabled" -ForegroundColor Green
    } else {
        $OptimizationTips += "Enable long path support for Windows: Set LongPathsEnabled registry key"
    }
} catch {
    Write-Host "  Could not check long path support" -ForegroundColor Yellow
}

# Show final sizes
Write-Host "`n=== Final Project Sizes ===" -ForegroundColor Cyan
$FinalNodeModulesSize = Get-FolderSize "node_modules"
$FinalNextSize = Get-FolderSize ".next"
$FinalTotalSize = $FinalNodeModulesSize + $FinalNextSize

Write-Host "node_modules: $FinalNodeModulesSize MB" -ForegroundColor $(if ($FinalNodeModulesSize -lt $NodeModulesSize) { "Green" } else { "Yellow" })
Write-Host ".next: $FinalNextSize MB" -ForegroundColor $(if ($FinalNextSize -lt $NextSize) { "Green" } else { "Yellow" })
Write-Host "Total: $FinalTotalSize MB" -ForegroundColor White

$SizeSaved = $TotalSize - $FinalTotalSize
if ($SizeSaved -gt 0) {
    Write-Host "Space saved: $([math]::Round($SizeSaved, 2)) MB" -ForegroundColor Green
}

# Show optimization tips
if ($OptimizationTips.Count -gt 0) {
    Write-Host "`n=== Optimization Recommendations ===" -ForegroundColor Cyan
    foreach ($Tip in $OptimizationTips) {
        Write-Host "  💡 $Tip" -ForegroundColor Yellow
    }
}

Write-Host "`nOptimization completed!" -ForegroundColor Green
Write-Host "Run with -Deep for more aggressive optimization" -ForegroundColor Cyan