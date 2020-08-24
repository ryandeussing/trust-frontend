[![Build Status](https://travis-ci.org/RedHatInsights/trust-frontend.svg?branch=master)](https://travis-ci.org/RedHatInsights/trust-frontend)

# trust-frontend

The purpose of this page is to act as a centralized resource via a vanity URL that can be accessed unauthenticated to enable prospective adopters of Insights to learn more about what security measures and controls we have in place. This page should be a high level so it can be available for our users (sysadmins) while also functional approvers such as Management or Security teams who need to approve usage.

## Getting Started

There is a [comprehensive quick start guide in the Storybook Documentation](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/welcome/quickStart/DOC.md) to setting up an Insights environment complete with:

- Insights Frontend Trust App

- [Insights Chroming](https://github.com/RedHatInsights/insights-chrome)
- [Insights Proxy](https://github.com/RedHatInsights/insights-proxy)

Note: You will need to set up the Insights environment if you want to develop with the trust app due to the consumption of the chroming service as well as setting up your global/app navigation through the API.

## Build app

1. ```npm install```

2. ```npm run start```
    - starts webpack bundler and serves the files with webpack dev server

### Testing

- `npm run verify` will run linters and tests
- Travis is used to test the build for this code.
  - You are always notified on failed builds
  - You are only notified on successful builds if the build before it failed
  - By default, both `push` events as well as `pull_request` events send notifications
  - Travis is defaulted to notify #insights-bots

### How it works

- any push to the `{REPO}` `master` branch will deploy to a `{REPO}-build` `ci-beta` branch
- any push to the `{REPO}` `ci-stable` branch will deploy to a `{REPO}-build` `ci-stable` branch
- any push to the `{REPO}` `qa-beta` branch will deploy to a `{REPO}-build` `qa-beta` branch
- any push to the `{REPO}` `qa-stable` branch will deploy to a `{REPO}-build` `qa-stable` branch
- any push to the `{REPO}` `prod-beta` branch will deploy to a `{REPO}-build` `prod-beta` branch
- any push to the `{REPO}` `prod-stable` branch will deploy to a `{REPO}-build` `prod-stable` branch
- Pull requests (based on master) will not be pushed to `{REPO}-build` `master` branch
  - If the PR is accepted and merged, master will be rebuilt and will deploy to `{REPO}-build` `ci-beta` branch


## Running locally
Have [insights-proxy](https://github.com/RedHatInsights/insights-proxy) installed under PROXY_PATH

```shell
SPANDX_CONFIG="./profiles/local-frontend.js" bash $PROXY_PATH/scripts/run.sh
```

### Testing - jest

When you want to test your code with unit tests please use `jest` which is preconfigured in a way to colect codecoverage as well. If you want to see your coverage on server the travis config has been set in a way that it will send data to [codecov.io](https://codecov.io) the only thing you have to do is visit their website (register), enable your repository and add CODECOV_TOKEN to your travis web config (do not add it to .travis file, but trough [travis-ci.org](https://travis-ci.org/))
