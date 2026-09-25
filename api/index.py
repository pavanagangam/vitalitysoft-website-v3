import os
import sys

# Ensure project root directory is in sys.path
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vitalitysoft_project.settings')

from django.core.wsgi import get_wsgi_application
app = get_wsgi_application()

# Run database migrations on serverless instance startup if needed
try:
    from django.core.management import call_command
    call_command('migrate', interactive=False)
except Exception:
    pass

# Vercel entrypoint callable
handler = app
