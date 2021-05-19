@echo off

SET COMMIT=%1

IF "%COMMIT%"=="" (
  echo missing parameter
) ELSE (
  echo moving to %COMMIT%...
  git reset HEAD --hard
  git clean -df
  git fetch -p --tags --force
  git checkout origin/main
  git pull origin main --rebase --force
  git checkout %COMMIT%
)
