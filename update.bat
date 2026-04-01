@echo off
echo 🚀 Registrando comandos...
node deploy-commands.js

echo 🔄 Reiniciando bot...
node index.js
pause
@echo off
:: Colores con ANSI (Windows 10+)
echo [93m🚀 Registrando comandos...[0m
node deploy-commands.js
if %errorlevel% neq 0 (
    echo [91m❌ Error al registrar comandos.[0m
    exit /b %errorlevel%
) else (
    echo [92m✅ Comandos registrados correctamente.[0m
)

echo [93m🔄 Reiniciando bot...[0m
node index.js
if %errorlevel% neq 0 (
    echo [91m❌ Error al iniciar el bot.[0m
    exit /b %errorlevel%
) else (
    echo [92m✅ Bot encendido sin problemas.[0m
)

pause