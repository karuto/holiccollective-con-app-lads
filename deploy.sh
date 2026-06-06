#!/bin/bash

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if commit message is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Please provide a commit message${NC}"
    echo "Usage: ./deploy.sh \"Your commit message\""
    exit 1
fi

COMMIT_MSG="$1"

echo -e "${BLUE}Starting deployment process...${NC}\n"

# Commit all source changes first
echo -e "${GREEN}[1/6] Committing source changes...${NC}"
git add .
git commit -m "$COMMIT_MSG"
if [ $? -ne 0 ]; then
    echo -e "${RED}No changes to commit or commit failed!${NC}"
    exit 1
fi

# Deploy personal variant
echo -e "${GREEN}[2/6] Building personal variant...${NC}"
npm run build:personal
if [ $? -ne 0 ]; then
    echo -e "${RED}Personal build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}[3/6] Committing and pushing personal variant...${NC}"
git add dist/
git commit -m "$COMMIT_MSG"
git push personal master
if [ $? -ne 0 ]; then
    echo -e "${RED}Push to personal remote failed!${NC}"
    exit 1
fi

# Deploy collective variant
echo -e "${GREEN}[4/6] Building collective variant...${NC}"
npm run build:collective
if [ $? -ne 0 ]; then
    echo -e "${RED}Collective build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}[5/6] Committing and pushing collective variant...${NC}"
git add dist/
git commit -m "$COMMIT_MSG"
git push collective master
if [ $? -ne 0 ]; then
    echo -e "${RED}Push to collective remote failed!${NC}"
    exit 1
fi

echo -e "${GREEN}[6/6] Pushing source changes to origin...${NC}"
git push origin master
if [ $? -ne 0 ]; then
    echo -e "${RED}Push to origin failed!${NC}"
    exit 1
fi

echo -e "\n${GREEN}✅ Deployment complete!${NC}"
echo -e "${BLUE}Personal site: con-app.holiccollective.com${NC}"
echo -e "${BLUE}Collective site: con.holiccollective.com${NC}"
