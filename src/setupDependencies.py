# This script automates the setup of dependencies for InDesign and Google Gemini integration

import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

# List of packages to install
packages = [
    "requests",  # For making API calls to Google Gemini
    "PyInDesign",  # For interfacing with Adobe InDesign
]

for package in packages:
    install(package)

print("Dependencies for InDesign and Google Gemini integration have been installed.")
