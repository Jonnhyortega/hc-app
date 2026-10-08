# Ir al directorio raíz del proyecto (donde está este script)
Set-Location $PSScriptRoot

# Construir el proyecto
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "El build falló. Deploy cancelado."
    exit 1
}

# Ir al directorio de salida
Set-Location out

# Verificar si hay cambios para commitear
$changes = git status --porcelain .

if ($changes) {
    Write-Host "Cambios detectados, realizando commit..."
    git add .
    git commit -m "Deploy automático HC APP"
    git push origin main

    Write-Host "Deploy completado correctamente."
} else {
    Write-Host "No hay cambios nuevos. Nada para commitear."
}

Set-Location $PSScriptRoot
