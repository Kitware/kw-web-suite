## Kitware Web Suite [![Dependency Status](https://img.shields.io/david/kitware/kw-web-suite.svg)](https://david-dm.org/kitware/kw-web-suite)

### Introduction

The **Kitware Web Suite** package aims to provide a common
set of tools used to build Web application at Kitware behind
a single dependency.

Anyone can use it, but the goal is to standardise
the tools and versions used accross our Web projects.

Here is the full list that will be available to you with **kw-web-suite**.

### Minimum Runtime requirement

- __Node__: 10.18.0
- __NPM__: 6.13.4

Commitizen needs to be globally installed to prevent thirdpart git-cz to take over the formatting and put emoji everywhere. Hopefully the next version will address that and everything can remain local.

### ES6

Package name                            | NPM Version                                                                       | Version
--------------------------------------- | --------------------------------------------------------------------------------- | ---------
@babel/core                             | ![npm version](https://badge.fury.io/js/%40babel%2Fcore.svg)                      | 7.11.6
@babel/plugin-transform-runtime         | ![npm version](https://badge.fury.io/js/%40babel%2Fplugin-transform-runtime.svg)  | 7.11.5
@babel/preset-env                       | ![npm version](https://badge.fury.io/js/%40babel%2Fpreset-env.svg)                | 7.11.5
@babel/preset-flow                      | ![npm version](https://badge.fury.io/js/%40babel%2Fpreset-flow.svg)               | 7.10.4
@babel/preset-react                     | ![npm version](https://badge.fury.io/js/%40babel%2Fpreset-react.svg)              | 7.10.4
@babel/preset-typescript                | ![npm version](https://badge.fury.io/js/%40babel%2Fpreset-typescript.svg)         | 7.10.4
@babel/register                         | ![npm version](https://badge.fury.io/js/%40babel%2Fregister.svg)                  | 7.11.5
@babel/runtime                          | ![npm version](https://badge.fury.io/js/%40babel%2Fruntime.svg)                   | 7.11.2
babel-eslint                            | ![npm version](https://badge.fury.io/js/babel-eslint.svg)                         | 10.1.0
babel-loader                            | ![npm version](https://badge.fury.io/js/babel-loader.svg)                         | 8.1.0
core-js                                 | ![npm version](https://badge.fury.io/js/core-js.svg)                              | 3.6.5
regenerator-runtime                     | ![npm version](https://badge.fury.io/js/regenerator-runtime.svg)                  | 0.13.7

### ESLint

Package name                   | NPM Version                                                                | Version
------------------------------ | -------------------------------------------------------------------------- | --------
eslint                         | ![npm version](https://badge.fury.io/js/eslint.svg)                        | 7.11.0
eslint-config-airbnb           | ![npm version](https://badge.fury.io/js/eslint-config-airbnb.svg)          | 18.2.0
eslint-config-prettier         | ![npm version](https://badge.fury.io/js/eslint-config-prettier.svg)        | 6.12.0
eslint-import-resolver-webpack | ![npm version](https://badge.fury.io/js/eslint-import-resolver-webpack.svg)| 0.13.0
eslint-loader                  | ![npm version](https://badge.fury.io/js/eslint-loader.svg)                 | 4.0.2
eslint-plugin-import           | ![npm version](https://badge.fury.io/js/eslint-plugin-import.svg)          | 2.22.1
eslint-plugin-jsx-a11y         | ![npm version](https://badge.fury.io/js/eslint-plugin-jsx-a11y.svg)        | 6.3.1
eslint-plugin-prettier         | ![npm version](https://badge.fury.io/js/eslint-plugin-prettier.svg)        | 3.1.4
eslint-plugin-react            | ![npm version](https://badge.fury.io/js/eslint-plugin-react.svg)           | 7.21.4

### Webpack loaders

Package name          | NPM Version                                                       | Version
--------------------- | ----------------------------------------------------------------- | --------
autoprefixer          | ![npm version](https://badge.fury.io/js/autoprefixer.svg)         | 10.0.1
postcss               | ![npm version](https://badge.fury.io/js/postcss.svg)              | 8.1.1
css-loader            | ![npm version](https://badge.fury.io/js/css-loader.svg)           | 4.3.0
exports-loader        | ![npm version](https://badge.fury.io/js/exports-loader.svg)       | 1.1.1
expose-loader         | ![npm version](https://badge.fury.io/js/expose-loader.svg)        | 1.0.1
file-loader           | ![npm version](https://badge.fury.io/js/file-loader.svg)          | 6.1.1
ignore-loader         | ![npm version](https://badge.fury.io/js/ignore-loader.svg)        | 0.1.2
hson-loader           | ![npm version](https://badge.fury.io/js/hson-loader.svg)          | 2.0.0
html-loader           | ![npm version](https://badge.fury.io/js/html-loader.svg)          | 1.3.2
postcss-loader        | ![npm version](https://badge.fury.io/js/postcss-loader.svg)       | 4.0.4
raw-loader            | ![npm version](https://badge.fury.io/js/raw-loader.svg)           | 4.0.2
regexp-replace-loader | ![npm version](https://badge.fury.io/js/regexp-replace-loader.svg)| 1.0.1
shader-loader         | ![npm version](https://badge.fury.io/js/shader-loader.svg)        | 1.3.1
string-replace-loader | ![npm version](https://badge.fury.io/js/string-replace-loader.svg)| 2.3.0
style-loader          | ![npm version](https://badge.fury.io/js/style-loader.svg)         | 2.0.0
svg-sprite-loader     | ![npm version](https://badge.fury.io/js/svg-sprite-loader.svg)    | 5.0.0
url-loader            | ![npm version](https://badge.fury.io/js/url-loader.svg)           | 4.1.1
worker-loader         | ![npm version](https://badge.fury.io/js/worker-loader.svg)        | 3.0.4

### Webpack plugins

Package name                    | NPM Version                                                                  | Version
------------------------------- | ---------------------------------------------------------------------------- | --------
clean-webpack-plugin            | ![npm version](https://badge.fury.io/js/clean-webpack-plugin.svg)            | 3.0.0
copy-webpack-plugin             | ![npm version](https://badge.fury.io/js/copy-webpack-plugin.svg)             | 6.2.1
create-symlink-webpack-plugin   | ![npm version](https://badge.fury.io/js/create-symlink-webpack-plugin.svg)   | 1.0.1
html-webpack-plugin             | ![npm version](https://badge.fury.io/js/html-webpack-plugin.svg)             | 4.5.0
save-remote-file-webpack-plugin | ![npm version](https://badge.fury.io/js/save-remote-file-webpack-plugin.svg) | 1.0.2
symlink-webpack-plugin          | ![npm version](https://badge.fury.io/js/symlink-webpack-plugin.svg)          | 1.0.0
terser-webpack-plugin           | ![npm version](https://badge.fury.io/js/terser-webpack-plugin.svg)           | 4.2.3
uglifyjs-webpack-plugin         | ![npm version](https://badge.fury.io/js/uglifyjs-webpack-plugin.svg)         | 2.2.0
webpack-manifest-plugin         | ![npm version](https://badge.fury.io/js/webpack-manifest-plugin.svg)         | 2.2.0
workbox-webpack-plugin          | ![npm version](https://badge.fury.io/js/workbox-webpack-plugin.svg)          | 5.1.4
write-file-webpack-plugin       | ![npm version](https://badge.fury.io/js/write-file-webpack-plugin.svg)       | 4.5.1


### Webpack cli+tools

Package name            | NPM Version                                                           | Version
----------------------- | --------------------------------------------------------------------- | --------
webpack                 | ![npm version](https://badge.fury.io/js/webpack.svg)                  | 5.0.0
webpack-cli             | ![npm version](https://badge.fury.io/js/webpack-cli.svg)              | 4.0.0
webpack-dev-server      | ![npm version](https://badge.fury.io/js/webpack-dev-server.svg)       | 3.11.0
parallel-webpack        | ![npm version](https://badge.fury.io/js/parallel-webpack.svg)         | 2.6.0
webpack-bundle-analyzer | ![npm version](https://badge.fury.io/js/webpack-bundle-analyzer.svg)  | 3.9.0
webpack-dashboard       | ![npm version](https://badge.fury.io/js/webpack-dashboard.svg)        | 3.2.1
webpack-merge           | ![npm version](https://badge.fury.io/js/webpack-merge.svg)            | 5.2.0
webpack-notifier        | ![npm version](https://badge.fury.io/js/webpack-notifier.svg)         | 1.8.0

### Software process

Package name              | NPM Version                                                            | Version
------------------------- | ---------------------------------------------------------------------- | --------
commitizen                | ![npm version](https://badge.fury.io/js/commitizen.svg)                | 4.2.1
cz-conventional-changelog | ![npm version](https://badge.fury.io/js/cz-conventional-changelog.svg) | 3.3.0
semantic-release          | ![npm version](https://badge.fury.io/js/semantic-release.svg)          | 17.2.1

### Utilities

Package name      | NPM Version                                                    | Version
----------------- | -------------------------------------------------------------- | --------
shelljs           | ![npm version](https://badge.fury.io/js/shelljs.svg)           | 0.8.4
prettier          | ![npm version](https://badge.fury.io/js/prettier.svg)          | 2.1.2
shx               | ![npm version](https://badge.fury.io/js/shx.svg)               | 0.3.2
size-limit        | ![npm version](https://badge.fury.io/js/size-limit.svg)        | 4.6.0
normalize.css     | ![npm version](https://badge.fury.io/js/normalize.css.svg)     | 8.0.1
inline-source-cli | ![npm version](https://badge.fury.io/js/inline-source-cli.svg) | 2.0.0
