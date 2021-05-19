#!/bin/bash

tags=(
  "forms"
  "service"
  "custom-directive-pipes"
  "gridview-pipes"
  "standalone"
  "lazy-modules"
  "product-list"
  "header"
  "init"
)

# get length of an array
tagsLength=${#tags[@]}

rm -rf deploy/*

# use for loop to read all values and indexes
for (( i=0; i<${tagsLength}; i++ ));
do
  echo "Building: ${tags[$i]}"
  git co "${tags[$i]}"
  npm run build -- --base-href "/${tags[$i]}/"
  mv dist/angular-ecommerce deploy/${tags[$i]}
done

git co main
npm run build
firebase deploy
