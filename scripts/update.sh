#!/bin/bash

# Color codes
TEXT_COLOR='\033[0;34m'
NO_COLOR='\033[0m'

printf "${TEXT_COLOR}Updating lukacupic.com${NO_COLOR}\n"

printf "${TEXT_COLOR}Pulling the latest changes: ${NO_COLOR}"
git pull > /dev/null 2>&1
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

printf "${TEXT_COLOR}Update successful.${NO_COLOR}\n"