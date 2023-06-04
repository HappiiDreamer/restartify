declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APPDATA?: string;
    }
  }
}
export {};