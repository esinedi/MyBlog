import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 虚拟数据
import './mock/index.ts'
// 路由
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import 'animate.css';

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

app.mount('#app')
