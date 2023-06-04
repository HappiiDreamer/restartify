export interface ISpotify {
  readonly filename: string,
  readonly processName: string,
  
  /**
   * Starts a process using a path.
   * 
   * @param path
   * @returns 
   */
  start: () => Promise<number | undefined>
  /**
   * Kills a process by the PID.
   * 
   * @param pid 
   * @returns 
   */
  kill: () => Promise<void>
}