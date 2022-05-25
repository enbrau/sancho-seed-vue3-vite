import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
import settings from './settings'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    base: './',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'index.html')
        },
        output: {
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[ext]'
        }
      }
    },
    plugins: [
      vue(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html.replace(
            /<title>(.*?)<\/title>/,
            `<title>${settings.title}</title>`
          )
        }
      }
    ],
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 9527,
      strictPort: false,
      proxy: {
        '/mock': {
          target: `http://localhost:9527`,
          changeOrigin: true,
          ws: true,
          secure: false,
          logLevel: 'debug',
          rewrite: path => path.replace(/\/mock/, '')
        }
      }
    }
  }
  
  if (process.env.NODE_ENV !== 'production') {
    config.plugins.push(
      // https://github.com/anncwb/vite-plugin-mock/
      viteMockServe({
        mockPath: 'mock',
        supportTs: false,
        watchFiles: true,
        ignoreFiles: [],
        prodEnabled: false,
        logger: true
      })
    )
  }

  return config
})
