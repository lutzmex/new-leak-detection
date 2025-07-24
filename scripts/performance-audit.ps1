# Performance Audit Script for Windows
# File: scripts/performance-audit.ps1

param(
    [string]$Url = "http://localhost:3000",
    [string]$OutputDir = "reports",
    [switch]$OpenReport
)

Write-Host "Starting Performance Audit..." -ForegroundColor Green

# Create reports directory if it doesn't exist
if (!(Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
    Write-Host "Created reports directory: $OutputDir" -ForegroundColor Yellow
}

# Check if Lighthouse is installed
try {
    lighthouse --version | Out-Null
    Write-Host "Lighthouse found" -ForegroundColor Green
} catch {
    Write-Host "Lighthouse not found. Installing..." -ForegroundColor Yellow
    npm install -g lighthouse
}

# Start Next.js server in background
Write-Host "Starting Next.js server..." -ForegroundColor Yellow
$ServerProcess = Start-Process -FilePath "npm" -ArgumentList "run", "start" -PassThru -WindowStyle Hidden

# Wait for server to start
Write-Host "Waiting for server to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 15

# Check if server is running
try {
    $Response = Invoke-WebRequest -Uri $Url -TimeoutSec 10 -UseBasicParsing
    Write-Host "Server is running at $Url" -ForegroundColor Green
} catch {
    Write-Host "Server failed to start or is not accessible" -ForegroundColor Red
    if ($ServerProcess) { Stop-Process -Id $ServerProcess.Id -Force }
    exit 1
}

# Run Lighthouse audit
Write-Host "Running Lighthouse performance audit..." -ForegroundColor Green
$Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$ReportPath = "$OutputDir/lighthouse-report-$Timestamp"

try {
    & lighthouse $Url `
        --output json `
        --output html `
        --output-path $ReportPath `
        --chrome-flags="--headless --no-sandbox --disable-gpu" `
        --only-categories=performance,accessibility,best-practices,seo `
        --quiet

    Write-Host "Lighthouse audit completed successfully!" -ForegroundColor Green
    Write-Host "Reports saved to: $ReportPath.html and $ReportPath.json" -ForegroundColor Yellow
    
    # Parse performance score from JSON report
    if (Test-Path "$ReportPath.json") {
        $JsonReport = Get-Content "$ReportPath.json" | ConvertFrom-Json
        $PerformanceScore = [math]::Round($JsonReport.categories.performance.score * 100)
        Write-Host "Performance Score: $PerformanceScore/100" -ForegroundColor $(if ($PerformanceScore -ge 90) { "Green" } elseif ($PerformanceScore -ge 50) { "Yellow" } else { "Red" })
        
        # Show key metrics
        $Metrics = $JsonReport.audits
        if ($Metrics.'first-contentful-paint') {
            $FCP = [math]::Round($Metrics.'first-contentful-paint'.numericValue / 1000, 2)
            Write-Host "First Contentful Paint: ${FCP}s" -ForegroundColor Cyan
        }
        if ($Metrics.'largest-contentful-paint') {
            $LCP = [math]::Round($Metrics.'largest-contentful-paint'.numericValue / 1000, 2)
            Write-Host "Largest Contentful Paint: ${LCP}s" -ForegroundColor Cyan
        }
        if ($Metrics.'cumulative-layout-shift') {
            $CLS = [math]::Round($Metrics.'cumulative-layout-shift'.numericValue, 3)
            Write-Host "Cumulative Layout Shift: $CLS" -ForegroundColor Cyan
        }
    }
    
    # Open report if requested
    if ($OpenReport -and (Test-Path "$ReportPath.html")) {
        Start-Process "$ReportPath.html"
    }
    
} catch {
    Write-Host "Lighthouse audit failed: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    # Clean up: Stop the server
    if ($ServerProcess) {
        Write-Host "Stopping Next.js server..." -ForegroundColor Yellow
        Stop-Process -Id $ServerProcess.Id -Force -ErrorAction SilentlyContinue
    }
}

Write-Host "Performance audit completed!" -ForegroundColor Green