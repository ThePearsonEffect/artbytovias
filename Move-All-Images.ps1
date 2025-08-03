# PowerShell script to move ALL remaining images to lovable-uploads
# This will ensure all images referenced in the codebase are in the correct location

Write-Host "Moving all remaining images to lovable-uploads..." -ForegroundColor Green

# Create lovable-uploads directory if it doesn't exist
$lovableUploadsDir = "public\lovable-uploads"
if (!(Test-Path $lovableUploadsDir)) {
    New-Item -ItemType Directory -Path $lovableUploadsDir -Force
    Write-Host "Created lovable-uploads directory" -ForegroundColor Yellow
}

# Get all PNG images currently in the public directory (not already in lovable-uploads)
$imagesToMove = Get-ChildItem "public\*.png" -ErrorAction SilentlyContinue

if ($imagesToMove.Count -gt 0) {
    Write-Host "Found $($imagesToMove.Count) images to move:" -ForegroundColor Cyan
    
    foreach ($image in $imagesToMove) {
        $destPath = Join-Path $lovableUploadsDir $image.Name
        try {
            Move-Item -Path $image.FullName -Destination $destPath -Force
            Write-Host "✓ Moved $($image.Name) to lovable-uploads" -ForegroundColor Green
        } catch {
            Write-Host "✗ Failed to move $($image.Name): $($_.Exception.Message)" -ForegroundColor Red
        }
    }
} else {
    Write-Host "No images found in public directory to move" -ForegroundColor Yellow
}

# List all images now in lovable-uploads
Write-Host "`nAll images in lovable-uploads directory:" -ForegroundColor Cyan
$allImages = Get-ChildItem "$lovableUploadsDir\*.png" -ErrorAction SilentlyContinue
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
    $url = "http://localhost:8080/lovable-uploads/$($img.Name)"
    try {
        $response = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 3 -ErrorAction Stop
        if ($response.StatusCode -eq 200) {
            Write-Host "✓ $($img.Name) is accessible" -ForegroundColor Green
        }
    } catch {
        Write-Host "✗ $($img.Name) is not accessible (server may not be running)" -ForegroundColor Red
    }
}

Write-Host "`nImage consolidation complete!" -ForegroundColor Green
Write-Host "All images should now be accessible at /lovable-uploads/[filename]" -ForegroundColor Yellow
