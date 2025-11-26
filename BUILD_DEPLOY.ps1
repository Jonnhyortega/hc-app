# Ir al directorio raíz
cd ..

# Construir el proyecto
npm run build

# Ir al directorio de salida
cd out

# Verificar si hay cambios para commitear
$changes = git status --porcelain

if ($changes) {
    Write-Host "Cambios detectados, realizando commit..."
    git add .
    git commit -m "Deploy automático HC APP"
    git push origin main --force

    Write-Host "Deploy completado correctamente."
} else {
    Write-Host "No hay cambios nuevos. Nada para commitear."
}
