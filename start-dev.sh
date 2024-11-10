#!/bin/bash
source ./env/bin/activate
python manage.py runserver &  
cd frontend
pnpm dev