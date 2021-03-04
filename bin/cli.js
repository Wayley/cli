#!/usr/bin/env node

// Check node version before requiring/doing anything else
// The user may be on a very old node version
'use strict';
const { satisfies } = require('semver');
const chalk = require('chalk');
const { engines, version, name } = require('../package.json');

function checkNodeVersion(expectedVersion, pakName) {
  if (!satisfies(process.version, expectedVersion)) {
    console.log(
      chalk.red(
        `You are using Node ${process.version}, but this version of ${pakName} requires Node ${expectedVersion}'.\n\nPlease upgrade your Node version.`
      )
    );
    process.exit(1);
  }
}
checkNodeVersion(engines.node, name);

const program = require('commander');

program.version(version).usage('<command> [options]');

// Create Command
program.command('create <app-name>').action((appName) => {
  console.log(chalk.yellow(`TODO: createAction in ${appName}`));
});

// init Command
program.command('init <app-name>').action((appName) => {
  console.log(chalk.yellow(`TODO: initAction in ${appName}`));
});
// plugin Command
program.command('plugin <plugin-name>').action((pluginName) => {
  console.log(chalk.yellow(`TODO: pluginAction in ${pluginName}`));
});
program.parse(process.argv);
