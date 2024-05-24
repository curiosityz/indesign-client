# This script automates the installation of all libraries, dependencies, and configurations necessary for interfacing with InDesign and Google Gemini.

import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

# List of libraries and dependencies to install
dependencies = [
    "requests",  # For making API calls to Google Gemini
    "PyInDesign",  # For interfacing with Adobe InDesign
    # Add more dependencies as needed
]

# Install each dependency
for dependency in dependencies:
    install(dependency)

print("All dependencies have been successfully installed.")
