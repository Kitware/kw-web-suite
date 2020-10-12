## From 10.x to 11.

- Upgraded webpack from 4 to 5.
- Upgraded webpack-cli from 3 to 4.
- Upgraded webpack-merge from 4 to 5.
- Upgraded eslint from 6.8 to 7.
- Upgraded autoprefixer from 9 to 10.
- Upgraded postcss from 7 to 8.
- Upgraded css-loader from 3 to 4.
- Upgraded exports-loader from 0.7 to 1.
- Upgraded expose-loader from 0.7 to 1.
  - Be sure to check up on how [exposes](https://github.com/webpack-contrib/expose-loader#exposes) work.
- Upgraded postcss-loader from 3 to 4.
- Upgraded style-loader from 1 to 2.
- Upgraded svg-sprite-loader from 4 to 5.
- Upgraded worker-loader from 2 to 3.
- Upgraded copy-webpack-plugin from 5 to 6.
- Upgraded terser-webpack-plugin from 2 to 4.

## From 9.x to 10.

Removed @babel/polyfill in favor of core-js@3 and regenerator-runtime.

Removed @babel/plugin-syntax-dynamic-import since it's included.

Prettier defaults have changed.

## From 5.x to 6.

Update to Webpack 4.

## From 4.x to 5.

### Babel preset-env

Update babel to use preset-env.

## From 3.x to 4.

### Webpack 3

Update Webpack from v2 to v3.6.0, most users of kw-web-suite will not have any
changes.

## From 2.x to 3.

### Webpack 2

Update Webpack from v1 to v2, which requires configuration changes by most
users of kw-web-suite.

### NPM version 3+

Require a minimum npm version of 3.0, and minimum node version of 4.0
