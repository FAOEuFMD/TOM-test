#!/bin/bash

# setup-env.sh
# This script sets up environment configurations by copying .env.example files
# to their respective .env files in the root, backend, and frontend directories.

# Function to copy environment files
copy_env_file() {
  local src=$1
  local dest=$2

  if [ -f "$src" ]; then
    cp "$src" "$dest"
    echo "✅ Copied $src to $dest."
  else
    echo "⚠️ Source file $src does not exist. Skipping..."
  fi
}

echo "🔧 Starting environment setup..."

# Directories to process, including root (denoted by '.')
directories=("" "backend" "frontend")

# Environments to set up
environments=("" "production" "staging") # "" represents the default .env

for dir in "${directories[@]}"; do
  if [ "$dir" == "" ]; then
    echo "📂 Processing root directory..."
    prefix=""
  else
    echo "📂 Processing $dir directory..."
    prefix="$dir/"
  fi

  for env in "${environments[@]}"; do
    if [ -z "$env" ]; then
      # Default environment (.env)
      src_file="${prefix}.env.example"
      dest_file="${prefix}.env"
    else
      # Specific environments (.env.production, .env.staging)
      src_file="${prefix}.env.${env}.example"
      dest_file="${prefix}.env.${env}"
    fi

    copy_env_file "$src_file" "$dest_file"
  done

  echo ""
done

echo "🎉 Environment setup complete. Please review and update the .env files with your specific configurations." 