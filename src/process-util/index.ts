import IProcessUtil from "./IProcessUtil.js";
import Win32ProcessUtil from "./Win32ProcessUtil.js"

let processUtil: IProcessUtil | undefined;
if (process.platform == 'win32') {
  processUtil = new Win32ProcessUtil();
}
export default processUtil;