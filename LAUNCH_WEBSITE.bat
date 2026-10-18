@echo off
title SJT Tours & Travels Pvt. Ltd. - Web Portal
echo =========================================================================
echo       SJT TOURS & TRAVELS PVT. LTD. - LAUNCHING PORTAL
echo       Safe Journeys | Happy Destinations
echo       Thammenahalli, Bangalore-562162, Karnataka
echo       Phone / WhatsApp: +91 99009 75920
echo =========================================================================
echo.
echo Starting local web server on port 8080...
start "" "http://localhost:8080"
python -m http.server 8080
pause
