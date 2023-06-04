#! /usr/bin/env node
import os from 'os';
import path from 'path';

import { program } from 'commander';
import chalk from 'chalk';
import spotify from './spotify/index.js';


// Check if platform is supported.
if (!spotify) {
  console.log(chalk.redBright(`${os.version()} is not supported.`));
  process.exit(1);
}

// Setup program.
program.action(async () => {
  try {
    await spotify!.kill();
    await spotify!.start();

    console.log(`Successfully restarted ${chalk.greenBright('Spotify')}.`);
  }
  catch (err) {
    console.log(chalk.redBright(`Failed to restart Spotify: ${(err as Error).cause}`));
  }
});

// Run
program.parse();