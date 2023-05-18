import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createComponents() {
    return Components({
        resolvers: [ElementPlusResolver()],
        dirs: ['src/components'],
        include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/],
        dts: './src/types/components.d.ts',
    })
}
