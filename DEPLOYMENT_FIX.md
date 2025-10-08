# GitHub Actions Deployment Fix

## What Was Wrong

The GitHub Actions workflow was failing because:

1. **Wrong directory**: Workflow was running from repo root, but project is in `wisatapadang/` subfolder
2. **Missing environment variables**: `NEXT_PUBLIC_GA_ID` was not set
3. **Node.js version**: Wasn't explicitly set to Node 20
4. **Missing caching**: Builds were slow without npm cache

## What Was Fixed

### 1. Updated `.github/workflows/firebase-hosting-merge.yml`
- Added `cd wisatapadang` to navigate to correct directory
- Set up Node.js 20 with npm caching
- Added `NODE_ENV=production` environment variable
- Added `NEXT_PUBLIC_GA_ID` from GitHub Secrets
- Set `entryPoint: wisatapadang` for Firebase deploy

### 2. Updated `.github/workflows/firebase-hosting-pull-request.yml`
- Same fixes as above for PR preview deploys

## GitHub Secret Required

**Action Required**: Add this secret in GitHub:
- Go to: https://github.com/Oksana3301/tourismwebsite/settings/secrets/actions
- Click: "New repository secret"
- Name: `NEXT_PUBLIC_GA_ID`
- Value: `G-X8MYV8LJ2N`

## Expected Build Time

- **Before**: Failed ❌
- **After**: ~3-5 minutes ✅

## Verification

After pushing this commit, check:
- GitHub Actions: https://github.com/Oksana3301/tourismwebsite/actions
- Should see green checkmark ✅
- Site auto-deploys to: https://sumateraway.web.app

---

**Fixed on**: October 8, 2025  
**Commit**: 278e507

