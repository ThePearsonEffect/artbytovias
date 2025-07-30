# === CONFIG ===
$projectRoot = "C:\Users\artby\Desktop\Lanky Bois"
$imageDir = Join-Path $projectRoot "public\images\lankybois"
$placeholderSource = "$projectRoot\placeholder.png"
$placeholderTarget = Join-Path $imageDir "placeholder.png"

Write-Host "🚀 Starting Deploy Prep for: $projectRoot"

# === 1. Fix image paths in HTML/JS/TSX files ===
$extensions = @("*.html", "*.tsx", "*.js", "*.jsx")
foreach ($ext in $extensions) {
    Get-ChildItem -Path $projectRoot -Recurse -Include $ext | ForEach-Object {
        $filePath = $_.FullName
        (Get-Content $filePath) |
            ForEach-Object { $_ -replace 'src\s*=\s*"images/', 'src="/images/' } |
            Set-Content $filePath
        Write-Host "🛠️  Fixed paths in: $filePath"
    }
}

# === 2. Create image directory ===
if (-Not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir -Force
    Write-Host "📁 Created image directory: $imageDir"
} else {
    Write-Host "✅ Image directory already exists: $imageDir"
}

# === 3. Add placeholder image ===
if (Test-Path $placeholderSource) {
    Copy-Item $placeholderSource $placeholderTarget -Force
    Write-Host "🖼️ Copied placeholder image to: $placeholderTarget"
} else {
    # Create minimal PNG with only PNG header
    $imgBytes = [byte[]](0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A)
    [System.IO.File]::WriteAllBytes($placeholderTarget, $imgBytes)
    Write-Host "🛠️ Created minimal placeholder PNG at: $placeholderTarget"
}

Write-Host "`n✅ Deploy prep complete. Push to GitHub and verify image paths in browser."
