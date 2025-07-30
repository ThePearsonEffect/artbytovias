# Define project path
$projectRoot = "C:\Users\artby\Desktop\Lanky Bois"

# Path to image directory
$imageDir = Join-Path $projectRoot "public\images\lankybois"

# Create the image directory if it doesn't exist
if (-Not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir -Force
    Write-Host "📁 Created image directory: $imageDir"
} else {
    Write-Host "✅ Image directory already exists: $imageDir"
}

# Optional: Copy placeholder image to avoid broken links
$placeholderSource = "$projectRoot\placeholder.png"
$placeholderTarget = Join-Path $imageDir "placeholder.png"

if (Test-Path $placeholderSource) {
    Copy-Item $placeholderSource $placeholderTarget -Force
    Write-Host "🖼️ Copied placeholder image to: $placeholderTarget"
} else {
    # Create a basic blank image if placeholder doesn't exist
    $imgBytes = [byte[]](0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A) # PNG header
    [System.IO.File]::WriteAllBytes($placeholderTarget, $imgBytes)
    Write-Host "🛠️ Created minimal PNG placeholder at: $placeholderTarget"
}

Write-Host "`n🚀 Image setup complete. Link products to /images/lankybois/[filename]"
