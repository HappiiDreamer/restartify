import path from "path";
import { ChildProcess, exec, spawn } from "child_process";
import { ISpotify } from "./ISpotify.js";

class Win32Spotify implements ISpotify {
  readonly filename: string;
  readonly processName: string;

  constructor(filename?: string) {
    this.filename = filename || path.join(process.env.APPDATA!, 'Spotify', 'Spotify.exe');
    this.processName = 'Spotify.exe';
  }

  async start(): Promise<number | undefined> {
    const process: ChildProcess = spawn(this.filename, {
      detached: true,
      stdio: 'ignore'
    });
    process.unref();

    return process.pid;
  }
  async kill(): Promise<void> {
    await this.killProcesses(...await this.getSpotifyProcesses());
  }

  private async getSpotifyProcesses(): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
      const command = `tasklist /FI "IMAGENAME eq ${this.processName}" /NH /FO CSV`;
      exec(command, (err, stdout) => {
        if (err) {
          reject(err);
          return;
        }

        const pids: number[] = [];
        const lines = stdout.split('\n');

        lines.forEach(line => {
          const cols = line.split(',');
          if (cols.length >= 2) {
            const pid = parseInt(cols[1].replace(/"/g, ''), 10);
            if (!isNaN(pid)) {
              pids.push(pid);
            }
          }
        });

        resolve(pids);
      });
    });
  }
  private async killProcesses(...pids: number[]): Promise<void> {
    return new Promise((resolve, reject) => {
      // Resolve is no PID's.
      if (pids.length == 0) {
        resolve();
        return;
      }

      // Build command.
      let command = 'taskkill';
      pids.forEach(pid => {
        command += ` /PID ${pid}`;
      });
      command += ' /F';

      // Run command.
      exec(command, (err, stdout) => {
        if (err) {
          reject(err);
        }
        else {
          resolve();
        }
      });
    });
  }
}
export default Win32Spotify;