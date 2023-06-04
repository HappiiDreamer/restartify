import IProcessUtil from "./IProcessUtil.js";
class Win32ProcessUtil implements IProcessUtil {
  async getProcessesByName(name: string): Promise<number[]> {
    return [0];
  }

  async killProcess(pid: number): Promise<void> {
    console.log('Killed ' + pid);
  }
  async startProcess(path: string): Promise<void> {
    console.log('Started ' + path);
  }
}
export default Win32ProcessUtil;