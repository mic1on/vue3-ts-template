import type { PluginOption } from 'vite'

import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'
import createUnocss from './unocss'
import createComponents from './components'
import createCompression from './compression'
export default function createVitePlugins(env: any) {
  const vitePlugins: (PluginOption | PluginOption[]) = [vue()]

  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createUnocss())
  vitePlugins.push(createCompression(env))

  return vitePlugins
}
