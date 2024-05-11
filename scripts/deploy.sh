#!/bin/bash

# Color codes
TEXT_COLOR='\033[0;34m'
NO_COLOR='\033[0m'

printf "${TEXT_COLOR}Deploying lukacupic.com${NO_COLOR}\n"

printf "${TEXT_COLOR}Pulling the latest changes: ${NO_COLOR}"
git pull > /dev/null 2>&1
if [ $? -eq 0 ]; then
  printf "${TEXT_COLOR}done.${NO_COLOR}\n"
else
  printf "${TEXT_COLOR}failed, exiting.${NO_COLOR}\n"
  exit 1
fi

printf "${TEXT_COLOR}Installing packages: ${NO_COLOR}"
npm install > /dev/null 2>&1
if [ $? -eq 0 ]; then
  printf "${TEXT_COLOR}done.${NO_COLOR}\n"
else
  printf "${TEXT_COLOR}failed, exiting.${NO_COLOR}\n"
  exit 1
fi

printf "${TEXT_COLOR}Updating CSS: ${NO_COLOR}"
npx tailwindcss -i ./public/input.css -o ./public/output.css > /dev/null 2>&1
if [ $? -eq 0 ]; then
  printf "${TEXT_COLOR}done.${NO_COLOR}\n"
else
  printf "${TEXT_COLOR}failed, exiting.${NO_COLOR}\n"
  exit 1
fi

printf "${TEXT_COLOR}Restarting the app: ${NO_COLOR}"
pm2 restart lukacupic > /dev/null 2>&1
if [ $? -eq 0 ]; then
  printf "${TEXT_COLOR}done.${NO_COLOR}\n"
else
  printf "${TEXT_COLOR}failed, exiting.${NO_COLOR}\n"
  exit 1
fi

printf "${TEXT_COLOR}Saving the state: ${NO_COLOR}"
pm2 save > /dev/null 2>&1
if [ $? -eq 0 ]; then
  printf "${TEXT_COLOR}done.${NO_COLOR}\n"
else
  printf "${TEXT_COLOR}failed, exiting.${NO_COLOR}\n"
  exit 1
fi

printf "${TEXT_COLOR}Deploy successful.${NO_COLOR}\n"
