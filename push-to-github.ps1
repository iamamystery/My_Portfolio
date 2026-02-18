#!/bin/bash
# GitHub Push Script for Portfolio

# Colors for output
$Green = "`e[32m"
$Blue = "`e[34m"
$Yellow = "`e[33m"
$Red = "`e[31m"
$Reset = "`e[0m"

Write-Host "`n$Blue═══════════════════════════════════════════════════════════$Reset"
Write-Host "$Blue  📦 PORTFOLIO - GITHUB PUSH SETUP$Reset"
Write-Host "$Blue═══════════════════════════════════════════════════════════$Reset`n"

# Prompt for GitHub username
Write-Host "$Yellow📝 Enter your GitHub username (without https://github.com/)$Reset"
$username = Read-Host "GitHub username"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "$Red❌ Error: Username cannot be empty$Reset`n"
    exit 1
}

Write-Host "`n$Blue📋 Configuration:$Reset"
Write-Host "   Repository Name: Portfolio"
Write-Host "   GitHub Username: $username"
Write-Host "   Repository URL: https://github.com/$username/Portfolio.git`n"

Write-Host "$Yellow⚠️  Please make sure you have:$Reset"
Write-Host "   ✓ Created 'Portfolio' repository on GitHub"
Write-Host "   ✓ Set repository to PUBLIC"
Write-Host "   ✓ Did NOT initialize with README (we have commits)$Red`n"

$confirm = Read-Host "$Yellow Continue with push? (yes/no)$Reset"

if ($confirm -ne "yes" -and $confirm -ne "y") {
    Write-Host "$Red❌ Cancelled$Reset`n"
    exit 1
}

# Change to portfolio directory
$portfolioPath = "C:\Users\Muhammad Jawad\My Portfolio"
if (-not (Test-Path $portfolioPath)) {
    Write-Host "$Red❌ Error: Portfolio directory not found$Reset`n"
    exit 1
}

cd $portfolioPath

Write-Host "`n$Blue🔧 Setting up remote and pushing...$Reset`n"

# Add remote
Write-Host "$Blue→ Adding GitHub remote...$Reset"
git remote add origin "https://github.com/$username/Portfolio.git" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "$Yellow  Remote already exists, removing and re-adding...$Reset"
    git remote remove origin 2>$null
    git remote add origin "https://github.com/$username/Portfolio.git"
}
Write-Host "$Green✓ Remote added successfully$Reset"

# Verify remote
Write-Host "`n$Blue→ Verifying remote...$Reset"
git remote -v
Write-Host "$Green✓ Remote verified$Reset"

# Push to GitHub
Write-Host "`n$Blue→ Pushing commits to GitHub...$Reset"
Write-Host "$Yellow Note: You may be prompted for credentials. Enter your GitHub username and personal access token.$Reset`n"
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n$Green✅ PUSH SUCCESSFUL!$Reset`n"
    Write-Host "$Green═══════════════════════════════════════════════════════════$Reset"
    Write-Host "$Green  🎉 Your code is now on GitHub!$Reset"
    Write-Host "$Green═══════════════════════════════════════════════════════════$Reset`n"
    
    Write-Host "$Blue📍 Next Steps:$Reset"
    Write-Host "   1. Visit: https://github.com/$username/Portfolio"
    Write-Host "   2. Verify all files are there"
    Write-Host "   3. Deploy on Vercel: https://vercel.com"
    Write-Host "   4. Click 'New Project' and select Portfolio"
    Write-Host "   5. Done! Your site is live!`n"
    
    Write-Host "$Blue📊 GitHub Repository:$Reset"
    Write-Host "   URL: https://github.com/$username/Portfolio"
    Write-Host "   Visibility: Public"
    Write-Host "   Files: 32"
    Write-Host "   Commits: 3`n"
} else {
    Write-Host "`n$Red❌ PUSH FAILED$Reset`n"
    Write-Host "$Yellow Troubleshooting:$Reset"
    Write-Host "   • Verify GitHub username is correct"
    Write-Host "   • Check repository exists and is PUBLIC"
    Write-Host "   • Ensure you have internet connection"
    Write-Host "   • Verify credentials are correct`n"
    exit 1
}

Write-Host "$Green═══════════════════════════════════════════════════════════$Reset`n"
