import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 虚拟数据
import './mock/index.ts'
// 路由
import router from './router/index'
// ui
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import 'animate.css';
// 国际化中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// pinia
import { createPinia } from 'pinia'

const store = createPinia()
const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
}).use(store).use(router)

// element plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
