# Navigate to the Nginx root directory where your Angular project is served
cd /var/www/angular-app

# Remove old files
sudo rm -rf */

# Copy new build files from the GitHub Actions workspace
sudo cp -r ~/path/to/github/workspace/dist/angular-app/* .

# Restart Nginx if necessary (optional)
sudo systemctl restart nginx
