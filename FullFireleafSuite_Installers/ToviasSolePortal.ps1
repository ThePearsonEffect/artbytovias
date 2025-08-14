Write-Host "`n🛍️ Welcome to the Tovias Solé Bookstore Portal..."
Write-Host "📚 Launching the literary home of reflections, poetry, and divine identity..."
Start-Sleep -Seconds 1

# Local fallback option
$localPath = "C:\Users\artby\Documents\Projects\artbytovias-mockup\toviassole\index.html"
$webLink   = "https://example.com/toviassole"  # Replace with live site when ready

if (Test-Path $localPath) {
    Write-Host "🔗 Opening local build..."
    Start-Process $localPath
} else {
    Write-Host "🌐 Opening live bookstore..."
    Start-Process $webLink
}
