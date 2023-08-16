import { URL, fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

import legacy from '@vitejs/plugin-legacy'
import pxtovw from 'postcss-px-to-viewport'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// console.log(import.meta.env.VITE_API_TARGET)

// https://vitejs.dev/config/
export default ({ mode }) => {
  // eslint-disable-next-line no-undef
  const _envData = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    server: {
      // port: 5173,
      open: true,
      proxy: {
        '/': {
          target: _envData.VITE_API_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\//, '')
        }
      }
    },
    // build: {
    //   target: "modules", // 设置最终构建的浏览器兼容目标
    // },
    plugins: [
      vue(),
      vueJsx(),
      // 自动生成传统版本的 chunk 及与其相对应 ES 语言特性方面的 polyfill。
      // 兼容版的 chunk 只会在不支持原生 ESM 的浏览器中进行按需加载。
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ],
    css: {
      postcss: {
        plugins: [
          pxtovw({
            viewportWidth: 750,
            viewportUnit: 'vw',
            exclude: [/node_modules\/vant/i],
            unitToConvert: 'px' // 需要转换的单位
            // viewportWidth: 750, // 设计稿的视口宽度
            // unitPrecision: 5, // 单位转换后保留的精度
            // propList: ["*"], // 能转换的vw属性列表
            // viewportUnit: "vw", // 希望使用的视口单位
            // fontViewportUnit: "vw", // 字体使用的视口单位
            // selectorBlackList: [], // 需要忽略的css选择器
            // minPixelValue: 1, // 设置最小的转换数值，如果为1，只有大于1的值才会被转换
            // mediaQuery: false, // 媒体查询中是否需要转换单位
            // replace: true, // 是否直接更换属性值
            // exclude: [], //  忽略某些文件夹下的文件或特定文件
            // landscape: false,
            // landscapeUnit: "vw", // 横屏时使用的单位
            // landscapeWidth: 568 // 横屏时使用的视口宽度
          })
        ]
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
