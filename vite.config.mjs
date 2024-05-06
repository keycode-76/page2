// vite.config.js
import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
// import * as Box2D from 'box2d.js';
// import fs from "vite-plugin-fs";

export default defineConfig({
  // 防止 Vite 在编译时清空屏幕，这样你就可以看到 Rust 的错误信息
  clearScreen: false,


  // 严格使用指定的端口，如果端口不可用会导致构建失败
  server: {
    strictPort: true,
  },

  // 允许你访问由 Tauri CLI 设置的环境变量，这些变量包含了关于当前目标的信息，如平台、架构、调试模式等
  envPrefix: ['VITE_', 'TAURI_PLATFORM', 'TAURI_ARCH', 'TAURI_FAMILY', 'TAURI_PLATFORM_VERSION', 'TAURI_PLATFORM_TYPE', 'TAURI_DEBUG'],
  plugins: [
    commonjs({
      extensions: ['.js', '.ts'],
    }),
    // fs()
  ],

  build: {
    // 根据 Tauri 的平台选择使用特定的浏览器引擎。Tauri 在 Windows 上使用 Chromium，而在 macOS 和 Linux 上使用 WebKit。
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',

    // 根据 Tauri 是否处于调试模式来决定是否进行代码压缩。在调试模式下，禁用压缩以提高代码可读性和调试体验。
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,

    // 根据 Tauri 是否处于调试模式来决定是否生成源代码映射文件。在调试模式下，生成源代码映射以便更好地进行调试。
    sourcemap: !!process.env.TAURI_DEBUG,

    cssPreprocessOptions: {
      // 如果要使用SASS全域變數就在這裡設定路徑
      scss: {
        // additionalData: '@import "./styles/variable.scss";',
      },
    },
    css: {
      // 官方列為實驗性功能，可以找出是由哪個來源建構的css
      devSourceMap: true,
    },
  },
  
});