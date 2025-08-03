# PowerShell script to organize images for the website
# This script moves images to the correct locations and updates image paths

Write-Host "Setting up images for the website..." -ForegroundColor Green

# Create lovable-uploads directory if it doesn't exist
$lovableUploadsDir = "public\lovable-uploads"
if (!(Test-Path $lovableUploadsDir)) {
    New-Item -ItemType Directory -Path $lovableUploadsDir -Force
    Write-Host "Created lovable-uploads directory" -ForegroundColor Yellow
}

# List of images that should be in lovable-uploads (based on your ProductGallery)
$productImages = @(
    "0df0a0fb-66cc-49e2-bed9-c45b60289914.png",
    "5bfd11a8-6a41-43a9-a565-36fe34aaff68.png", 
    "5e8b4822-2622-4556-a45b-bc223e27dde5.png"
)

# Move product images to lovable-uploads directory
Write-Host "Moving product images to lovable-uploads..." -ForegroundColor Cyan
foreach ($image in $productImages) {
    $sourcePath = "public\$image"
    $destPath = "$lovableUploadsDir\$image"
    
    if (Test-Path $sourcePath) {
        Move-Item -Path $sourcePath -Destination $destPath -Force
        Write-Host "Moved $image to lovable-uploads" -ForegroundColor Green
    } else {
        Write-Host "Warning: $image not found in public directory" -ForegroundColor Red
    }
}

# List all remaining images in public directory
Write-Host "`nRemaining images in public directory:" -ForegroundColor Cyan
Get-ChildItem "public\*.png" | ForEach-Object {
    Write-Host "  - $($_.Name)" -ForegroundColor White
}

# List all images now in lovable-uploads
Write-Host "`nImages in lovable-uploads directory:" -ForegroundColor Cyan
if (Test-Path $lovableUploadsDir) {
    Get-ChildItem "$lovableUploadsDir\*.png" | ForEach-Object {
        Write-Host "  - $($_.Name)" -ForegroundColor White
    }
}

Write-Host "`nImage setup complete!" -ForegroundColor Green
Write-Host "Your ProductGallery images should now be accessible at /lovable-uploads/[filename]" -ForegroundColor Yellow

# Test if the dev server is running and check image accessibility
Write-Host "`nTesting image accessibility..." -ForegroundColor Cyan
foreach ($image in $productImages) {
    $url = "http://localhost:8080/lovable-uploads/$image"
    try {
        $response = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 5 -ErrorAction Stop
        if ($response.StatusCode -eq 200) {
            Write-Host "✓ $image is accessible" -ForegroundColor Green
        }
    } catch {
        Write-Host "✗ $image is not accessible (server may not be running)" -ForegroundColor Red
    }
}

Write-Host "`nRun 'npm run dev' to start the development server if it's not already running." -ForegroundColor Yellow
