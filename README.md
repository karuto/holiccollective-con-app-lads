# Holic Collective

This is a single-source repository that deploys to two different GitHub Pages sites with content variations.

## Architecture

This project uses **environment variables** to switch between two variants:
- **Personal variant** → Deploys to `con-app.holiccollective.com`
- **Collective variant** → Deploys to `con.holiccollective.com`

Both variants share the same codebase. Content differences are managed via `src/config.js` using the `REACT_APP_VARIANT` environment variable.

## Prerequisites

- Node.js >= 18
- npm >= 5

## Getting Started

Install dependencies after cloning:

```bash
npm install
```

## Local Development

### Running dev build (uses default variant)

```bash
npm start
```

This runs webpack in development mode. Open `dist/index.html` in your browser to preview.

### Building specific variants locally

To preview how each variant looks before deploying:

```bash
# Build personal variant
npm run build:personal

# Build collective variant  
npm run build:collective
```

After building, open `dist/index.html` in your browser to preview the built variant.

**⚠️ Important:** The `dist/` folder changes based on which variant you build. Don't manually commit the dist folder - use the deployment script instead.

## Git Setup

This repository has three remotes configured:

- **`origin`** → git@github.com:karuto/holiccollective-con-app.git (source of truth)
- **`personal`** → git@github.com:karuto/holiccollective-con-app.git (same as origin, deploys personal variant)
- **`collective`** → git@github.com:karuto/holiccollective-con-app-collective.git (deploys collective variant)

You can verify this with:

```bash
git remote -v
```

## Making Changes & Deployment

### Step 1: Edit source code

Make your changes to any files in `src/`, `index.html`, etc. Do NOT manually edit the `dist/` folder.

### Step 2: Deploy everything with one command

Use the automated deployment script:

```bash
./deploy.sh "Your commit message here"
```

**What this script does:**

1. Commits all your source changes
2. Builds the **personal** variant (`npm run build:personal`)
3. Commits the dist folder and pushes to `personal` remote
4. Builds the **collective** variant (`npm run build:collective`)
5. Commits the dist folder and pushes to `collective` remote
6. Pushes source changes to `origin` remote

### Step 3: Verify deployment

GitHub Pages will automatically deploy both sites:
- Personal: https://con-app.holiccollective.com
- Collective: https://con.holiccollective.com

**Note:** GitHub Pages deployment can take 1-2 minutes after pushing.

## Content Customization

Content differences between variants are managed in `src/config.js`:

```javascript
const configMap = {
  collective: {
    title: "...",
    description: "...",
  },
  personal: {
    title: "...",
    description: "...",
  },
};
```

Edit this file to change text content for either variant.

## Manual Deployment (Alternative)

If you need more control, you can manually deploy:

```bash
# Build and push personal variant
npm run build:personal
git add dist/
git commit -m "Deploy personal variant"
git push personal master

# Build and push collective variant
npm run build:collective
git add dist/
git commit -m "Deploy collective variant"
git push collective master
```

**⚠️ Warning:** Manual deployment requires careful attention to avoid pushing the wrong variant to the wrong remote.

## Troubleshooting

### "No changes to commit" error when running deploy.sh

If you see this error but you made changes, check:
- Are your changes already committed? Run `git status` to verify
- Did you make any actual file changes?

### Wrong content showing on deployed site

- Wait 1-2 minutes for GitHub Pages to rebuild
- Clear your browser cache
- Verify you pushed to the correct remote with the correct build

### Deploy script fails

- Check that you have push access to both GitHub repositories
- Ensure all remotes are configured correctly: `git remote -v`
- Verify Node.js and npm are working: `npm --version`
