# Windows Audit Script
# File: scripts/audit-windows.ps1

param(
    [switch]$Fix,
    [switch]$Verbose
)

Write-Host "Starting Windows Environment Audit..." -ForegroundColor Green

# Check Node.js version
Write-Host "`n=== Node.js Environment ===" -ForegroundColor Cyan
try {
    $NodeVersion = node --version
    Write-Host "Node.js Version: $NodeVersion" -ForegroundColor Green
    
    $NpmVersion = npm --version
    Write-Host "NPM Version: $NpmVersion" -ForegroundColor Green
    
    # Check if pnpm is available
    try {
        $PnpmVersion = pnpm --version
        Write-Host "PNPM Version: $PnpmVersion" -ForegroundColor Green
    } catch {
        Write-Host "PNPM not found - using NPM" -ForegroundColor Yellow
    }
} catch {
    Write-Host "Node.js not found or not in PATH" -ForegroundColor Red
    exit 1
}

# Check package.json
Write-Host "`n=== Package Information ===" -ForegroundColor Cyan
if (Test-Path "package.json") {
    $Package = Get-Content "package.json" | ConvertFrom-Json
    Write-Host "Project: $($Package.name) v$($Package.version)" -ForegroundColor Green
    Write-Host "Next.js Version: $($Package.dependencies.next)" -ForegroundColor Green
} else {
    Write-Host "package.json not found!" -ForegroundColor Red
    exit 1
}

# Check dependencies
Write-Host "`n=== Dependencies Check ===" -ForegroundColor Cyan
if (Test-Path "node_modules") {
    Write-Host "node_modules exists" -ForegroundColor Green
    
    # Check for outdated packages
    Write-Host "Checking for outdated packages..." -ForegroundColor Yellow
    try {
        npm outdated --depth=0 2>$null
    } catch {
        Write-Host "All packages are up to date" -ForegroundColor Green
    }
} else {
    Write-Host "node_modules not found - run 'npm install'" -ForegroundColor Red
    if ($Fix) {
        Write-Host "Installing dependencies..." -ForegroundColor Yellow
        npm install
    }
}

# Check build files
Write-Host "`n=== Build Files Check ===" -ForegroundColor Cyan
if (Test-Path ".next") {
    Write-Host ".next build directory exists" -ForegroundColor Green
    $BuildSize = (Get-ChildItem ".next" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
    Write-Host "Build size: $([math]::Round($BuildSize, 2)) MB" -ForegroundColor Yellow
} else {
    Write-Host ".next build directory not found - run 'npm run build'" -ForegroundColor Yellow
}

# Check environment files
Write-Host "`n=== Environment Configuration ===" -ForegroundColor Cyan
$EnvFiles = @(".env", ".env.local", ".env.development", ".env.production")
foreach ($EnvFile in $EnvFiles) {
    if (Test-Path $EnvFile) {
        Write-Host "$EnvFile exists" -ForegroundColor Green
    }
}

# Check TypeScript configuration
Write-Host "`n=== TypeScript Configuration ===" -ForegroundColor Cyan
if (Test-Path "tsconfig.json") {
    Write-Host "tsconfig.json exists" -ForegroundColor Green
    
    # Run TypeScript check
    Write-Host "Running TypeScript check..." -ForegroundColor Yellow
    try {
        $TscOutput = & npx tsc --noEmit 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "TypeScript check passed" -ForegroundColor Green
        } else {
            Write-Host "TypeScript errors found:" -ForegroundColor Red
            Write-Host $TscOutput -ForegroundColor Red
        }
    } catch {
        Write-Host "TypeScript check failed" -ForegroundColor Red
    }
} else {
    Write-Host "tsconfig.json not found" -ForegroundColor Yellow
}

# Check Next.js configuration
Write-Host "`n=== Next.js Configuration ===" -ForegroundColor Cyan
$NextConfigFiles = @("next.config.js", "next.config.ts", "next.config.mjs")
$NextConfigFound = $false
foreach ($ConfigFile in $NextConfigFiles) {
    if (Test-Path $ConfigFile) {
        Write-Host "$ConfigFile exists" -ForegroundColor Green
        $NextConfigFound = $true
        break
    }
}
if (-not $NextConfigFound) {
    Write-Host "No Next.js config file found" -ForegroundColor Yellow
}

# Security audit
Write-Host "`n=== Security Audit ===" -ForegroundColor Cyan
Write-Host "Running npm security audit..." -ForegroundColor Yellow
try {
    $AuditOutput = npm audit --audit-level moderate --json 2>$null | ConvertFrom-Json
    if ($AuditOutput.metadata.vulnerabilities.total -eq 0) {
        Write-Host "No security vulnerabilities found" -ForegroundColor Green
    } else {
        $Vulns = $AuditOutput.metadata.vulnerabilities
        Write-Host "Security vulnerabilities found:" -ForegroundColor Red
        Write-Host "  Critical: $($Vulns.critical)" -ForegroundColor Red
        Write-Host "  High: $($Vulns.high)" -ForegroundColor Yellow
        Write-Host "  Moderate: $($Vulns.moderate)" -ForegroundColor Yellow
        Write-Host "  Low: $($Vulns.low)" -ForegroundColor Green
        
        if ($Fix) {
            Write-Host "Attempting to fix vulnerabilities..." -ForegroundColor Yellow
            npm audit fix
        }
    }
} catch {
    Write-Host "Security audit failed or no issues found" -ForegroundColor Yellow
}

# Performance recommendations
Write-Host "`n=== Performance Recommendations ===" -ForegroundColor Cyan
$Recommendations = @()

if (!(Test-Path ".next")) {
    $Recommendations += "Run 'npm run build' to create optimized production build"
}

if (!(Get-Content "package.json" | Select-String "sharp")) {
    $Recommendations += "Consider adding 'sharp' package for better image optimization"
}

if ($Recommendations.Count -gt 0) {
    Write-Host "Recommendations:" -ForegroundColor Yellow
    foreach ($Rec in $Recommendations) {
        Write-Host "  - $Rec" -ForegroundColor White
    }
} else {
    Write-Host "No performance recommendations at this time" -ForegroundColor Green
}

# Clean up recommendations
Write-Host "`n=== Cleanup Recommendations ===" -ForegroundColor Cyan
$CleanupItems = @()

if (Test-Path "node_modules/.cache") {
    $CleanupItems += "Clear node_modules/.cache directory"
}

if (Test-Path ".next/cache") {
    $CleanupItems += "Clear .next/cache directory"
}

$TempFiles = Get-ChildItem -Path "." -Include "*.tmp", "*.log" -Recurse -ErrorAction SilentlyContinue
if ($TempFiles.Count -gt 0) {
    $CleanupItems += "Remove temporary files: $($TempFiles.Count) files"
}

if ($CleanupItems.Count -gt 0) {
    Write-Host "Cleanup items found:" -ForegroundColor Yellow
    foreach ($Item in $CleanupItems) {
        Write-Host "  - $Item" -ForegroundColor White
    }
    
    if ($Fix) {
        Write-Host "Performing cleanup..." -ForegroundColor Yellow
        Remove-Item "node_modules/.cache" -Recurse -Force -ErrorAction SilentlyContinue
        Remove-Item ".next/cache" -Recurse -Force -ErrorAction SilentlyContinue
        $TempFiles | Remove-Item -Force -ErrorAction SilentlyContinue
        Write-Host "Cleanup completed" -ForegroundColor Green
    }
} else {
    Write-Host "No cleanup needed" -ForegroundColor Green
}

Write-Host "`nAudit completed!" -ForegroundColor Green
if (-not $Fix) {
    Write-Host "Run with -Fix parameter to automatically fix issues" -ForegroundColor Cyan
}