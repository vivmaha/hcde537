### Local Build & Deploy

- Install Node.js [here](https://nodejs.org/en/)

- Install NPM Dependencies
    - switch to the repo root
    - `npm install`

- Build and deploy the site locally
    - switch to the repo root
    - `grunt serve`
    - view the site @ `http://localhost:9001`
    - the site would automatically update & reload as you make code changes

### Live Sites

| Site                       | Description                                |
| -------------------------- | ------------------------------------------ |
| hcde737                    | Shared broadly. Always works.              |

Published @  `https://www.{ site }.azurewebsites.net`

Managed @ `https://manage.windowsazure.com`

#### Publishing
- View the site in the [Azure Management Portal](https://manage.windowsazure.com)
- Switch to the `Deployments` tab, and copy the `GIT URL`.
- Switch to the repo root on your computer
- `git remote add {site-name} {git-url}`
- `git push {site-name} {master}`


