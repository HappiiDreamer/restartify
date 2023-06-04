interface IProcessUtil {
  /**
   * Get all the processes by name.
   * 
   * @param name 
   * @returns The PID of the processes with that name.
   */
  getProcessesByName: (name: string) => Promise<number[]>
  /**
   * Kills a process by the PID.
   * 
   * @param pid 
   * @returns 
   */
  killProcess: (pid: number) => Promise<void>
  
  /**
   * Starts a process using a path.
   * 
   * @param path
   * @returns 
   */
  startProcess: (path: string) => Promise<void>
}
export default IProcessUtil;