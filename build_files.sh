#!/bin/bash
echo "Installing Python requirements..."
python3 -m pip install --break-system-packages -r requirements.txt || pip install --break-system-packages -r requirements.txt || pip install -r requirements.txt

echo "Building React Frontend..."
npm install
npm run build

echo "Collecting Django Static Assets..."
python3 manage.py collectstatic --noinput || python manage.py collectstatic --noinput
