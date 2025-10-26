# GitHub Setup Commands (Run these after fixing Git)

# 1. Initialize Git repository
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Meditation app with payment system"

# 4. Create GitHub repository (do this manually first)
# Go to https://github.com/new
# Repository name: meditation-app
# Make it public or private
# DON'T initialize with README (we already have code)

# 5. Connect to GitHub (replace with your username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/meditation-app.git

# 6. Push to GitHub
git branch -M main
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo "Now you can deploy to Netlify and Railway!"
