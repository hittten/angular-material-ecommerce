#!/bin/bash

tags=(
  "standalone"
  "lazy-modules"
  "product-list"
  "header"
  "init"
)

git co "${tags[0]}"
npm run clean-packages

rm -rf deploy/*

# use for loop to read all values and indexes
for (( i=0; i<${#tags[@]}; i++ ));
do
  echo "Building: ${tags[$i]}"
  git co "${tags[$i]}"
  npm run build -- --base-href "/${tags[$i]}/"
  mv dist/angular-ecommerce deploy/${tags[$i]}
done

tags=(
  "fake-http"
  "forms"
  "service"
  "custom-directive-pipes"
  "gridview-pipes"
  "material-3"
)

git co main
npm run clean-packages

# use for loop to read all values and indexes
for (( i=0; i<${#tags[@]}; i++ ));
do
  echo "Building: ${tags[$i]}"
  git co "${tags[$i]}"
  npm run build -- --base-href "/${tags[$i]}/"
  mv dist/angular-ecommerce/browser deploy/${tags[$i]}
done

firebase deploy --only hosting:view
