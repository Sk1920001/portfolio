#!/usr/bin/env sh

# Detener en caso de error
set -e

# Construir el proyecto
npm run build

# Navegar al directorio de salida
cd dist

# Crear archivo .nojekyll para que GitHub Pages procese archivos con _
touch .nojekyll

# Si estás desplegando en un dominio personalizado
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# Desplegar en https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
