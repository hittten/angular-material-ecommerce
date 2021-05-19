#!/bin/zsh

# Obtén todos los IDs de commit de una rama específica
commits=("${(@f)$(git log --format="%h" main)}")

# Tus tags existentes, con un tag vacío al principio
tags=(
  ""
  "pwa"
  "http"
  "signals"
  "fake-http"
  "forms"
  "control-flow"
  "service"
  "custom-directive-pipes"
  "gridview-pipes"
  "material-3"
  "update"
  "standalone"
  "lazy-modules"
  "product-list"
  "header"
  "init"
)

# Verifica que el número de tags coincida con el número de commits
if [ ${#commits[@]} -ne ${#tags[@]} ]; then
  echo "El número de commits y tags no coincide."
  echo "Commits [${#commits[@]}]: ${commits[*]} "
  echo "Tags [${#tags[@]}]: ${tags[*]}"
  exit 1
fi

# Manejo de la opción --dry-run
DRY_RUN=false
if [ "$1" = "--dry-run" ]; then
  DRY_RUN=true
  echo "Running in dry-run mode. No changes will be made."
fi

# Etiqueta los commits
for (( i=1; i<=$#tags; i++ ));
do
  # Si el tag está vacío, salta este commit
  if [ -z "${tags[i]}" ]; then
    echo "Skip commit ${commits[i]} [$(git show -s --oneline ${commits[i]})] as it has no associated tag."
    continue
  fi

  # Si el commit está vacío, también salta este tag
  if [ -z "${commits[i]}" ]; then
    echo "Skip tag ${tags[i]} as it has no associated commit."
    continue
  fi

  if [ "$DRY_RUN" = true ]; then
    echo "Would tagging: [$(git show -s --oneline ${commits[i]})] with tag: ${tags[i]}"
  else
    echo "Tagging: [$(git show -s --oneline ${commits[i]})] with tag: ${tags[i]}"
    git checkout "${commits[i]}"
    git tag -a "${tags[i]}" -m "${tags[i]}" --force
  fi
done

# Vuelve a la rama principal, a menos que esté en modo dry-run
if [ "$DRY_RUN" = false ]; then
  git checkout main
fi
