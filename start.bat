@echo off
setlocal
cd /d "%~dp0"
start "Comforting Corner" http://localhost:8000
node server.js
pause
