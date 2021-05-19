#!/bin/bash
set -e

git co -b fix
git add .
git commit --amend <<< :wq
git co main
git rebase -i fix
