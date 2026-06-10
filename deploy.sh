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

# Commit all source changes first (excluding CNAME - each remote has its own)
echo -e "${GREEN}[1/7] Committing source changes...${NC}"
git add . ':!CNAME'
git commit -m "$COMMIT_MSG"
if [ $? -ne 0 ]; then
    echo -e "${BLUE}No new source changes to commit (already committed or no changes). Continuing...${NC}"
fi

# Deploy personal variant
echo -e "${GREEN}[2/7] Building personal variant...${NC}"
npm run build:personal
if [ $? -ne 0 ]; then
    echo -e "${RED}Personal build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}[3/7] Committing and pushing personal variant...${NC}"
git add dist/
git commit -m "$COMMIT_MSG"
git push personal master
if [ $? -ne 0 ]; then
    echo -e "${RED}Push to personal remote failed!${NC}"
    exit 1
fi

# Deploy collective variant
echo -e "${GREEN}[4/7] Building collective variant...${NC}"
npm run build:collective
if [ $? -ne 0 ]; then
    echo -e "${RED}Collective build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}[5/7] Committing and pushing collective variant...${NC}"
git add dist/
git commit -m "$COMMIT_MSG"
git push collective master
if [ $? -ne 0 ]; then
    echo -e "${RED}Push to collective remote failed!${NC}"
    exit 1
fi

# Deploy lads variant
echo -e "${GREEN}[6/7] Building lads variant...${NC}"
npm run build:lads
if [ $? -ne 0 ]; then
    echo -e "${RED}Lads build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}[7/7] Committing and pushing lads variant...${NC}"
git add dist/
git commit -m "$COMMIT_MSG"
git push lads master
if [ $? -ne 0 ]; then
    echo -e "${RED}Push to lads remote failed!${NC}"
    exit 1
fi

echo -e "\n${GREEN}✅ Deployment complete!${NC}"
echo -e "${BLUE}Personal site: con-app.holiccollective.com${NC}"
echo -e "${BLUE}Collective site: con.holiccollective.com${NC}"
echo -e "${BLUE}Lads site: con-app-lads.holiccollective.com${NC}"
