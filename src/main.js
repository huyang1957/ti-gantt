import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import GanttLayout from './components/gantt-layout.vue'

if (typeof window !== 'undefined') {
  window.axios = axios
}

const vfApp = createApp(App)

vfApp.config.performance = true
vfApp.use(ElementPlus)

vfApp.component('gantt-layout', GanttLayout)

vfApp.mount('#app')
