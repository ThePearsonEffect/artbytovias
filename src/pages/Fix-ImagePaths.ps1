# Path to your project directory
$projectRoot = "C:\Users\artby\Desktop\Lanky Bois"

# File(s) to search for product image paths
$files = Get-ChildItem -Path $projectRoot -Recurse -Include *.ts, *.tsx

foreach ($file in $files) {
    (Get-Content $file.FullName) |
    ForEach-Object {
        # Regex match: anything like image: "filename.png"
        $_ -replace 'image:\s*"([^"]+)"', 'image: "/images/lankybois/$1"'
    } | Set-Content $file.FullName
}

Write-Host "✅ Image paths updated to /images/lankybois/... in all .ts/.tsx files."
