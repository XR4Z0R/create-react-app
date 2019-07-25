// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

// @remove-on-eject-begin
// Do the preflight check (only happens before eject).
const verifyPackageTree = require('./utils/verifyPackageTree');
if (process.env.SKIP_PREFLIGHT_CHECK !== 'true') {
  verifyPackageTree();
}
const verifyTypeScriptSetup = require('./utils/verifyTypeScriptSetup');
verifyTypeScriptSetup();
// @remove-on-eject-end


const clearConsole = require('react-dev-utils/clearConsole');
const CLIEngine = require('eslint').CLIEngine;
const formatter = require('react-dev-utils/eslintFormatter');
const chalk = require('react-dev-utils/chalk');

const cli = new CLIEngine();

const report = cli.executeOnFiles("src/**/*.{js,jsx}");

clearConsole();

if (report.errorCount > 0 || report.warningCount > 0) {
  console.log(formatter(report.results));
  console.log();
} else {
  console.log(chalk.green("🗸 No linting errors or warnings"));
  console.log();
}
