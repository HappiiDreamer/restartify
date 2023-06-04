#! /usr/bin/env node
import os from 'os';
import { program } from 'commander';
import chalk from 'chalk';
import processUtil from './process-util/index.js';

// Check if platform is supported.
if (!processUtil) {
  console.log(chalk.redBright(`${os.version()} is not supported.`));
  process.exit(1);
}

program.action(async () => {
  console.log(await processUtil?.getProcessesByName('Spotify'));
});
program.parse();