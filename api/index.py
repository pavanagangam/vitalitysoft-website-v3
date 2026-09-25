import os
import sys

# Add base directory to path for Vercel Serverless Function
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from vitalitysoft_project.wsgi import app

# Vercel entrypoint
handler = app
