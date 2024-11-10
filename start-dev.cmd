@echo off
call .\env\Scripts\activate
start python manage.py runserver
cd frontend
pnpm dev