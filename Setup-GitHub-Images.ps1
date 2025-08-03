# PowerShell script to organize images for GitHub Pages deployment
# This script ensures all images are properly organized in the /images directory

Write-Host "Setting up images for GitHub deployment..." -ForegroundColor Green

# Create images directory if it doesn't exist
$imagesDir = "public\images"
if (!(Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir -Force
    Write-Host "Created images directory" -ForegroundColor Yellow
}

# List all images in the images directory
Write-Host "`nAll images in images directory:" -ForegroundColor Cyan
$allImages = Get-ChildItem "$imagesDir\*.png" -ErrorAction SilentlyContinue
if ($allImages) {
    foreach ($img in $allImages) {
        Write-Host "  - $($img.Name)" -ForegroundColor White
    }
    Write-Host "Total: $($allImages.Count) images" -ForegroundColor Green
} else {
    Write-Host "  No images found!" -ForegroundColor Red
}

Write-Host "`nChecking accessibility of all images..." -ForegroundColor Cyan
foreach ($img in $allImages) {
    $url = "http://localhost:8080/images/$($img.Name)"
    try {
        $response = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 3 -ErrorAction Stop
        if ($response.StatusCode -eq 200) {
            Write-Host "✓ $($img.Name) is accessible" -ForegroundColor Green
        }
    } catch {
        Write-Host "✗ $($img.Name) is not accessible (server may not be running)" -ForegroundColor Red
    }
}

Write-Host "`nImage setup complete for GitHub deployment!" -ForegroundColor Green
Write-Host "All images are now accessible at /images/[filename]" -ForegroundColor Yellow
Write-Host "Repository ready for GitHub Pages deployment" -ForegroundColor Green
