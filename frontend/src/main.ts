import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerGlobalComponents } from './features/GlobalComponents'
import { createCustomRouter } from './router/routes'
import './assets/index.css'
import App from './App.vue'

const app = createApp(App)

const router = createCustomRouter()

registerGlobalComponents(app).then(() => {
  app.use(router)
  app.use(createPinia())
  app.mount('#app')
})
