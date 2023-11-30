/// <reference types="vite/client" />

interface ImportMetaEnv {
  HTB_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
