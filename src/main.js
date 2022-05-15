import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---

createApp(App).use(router).mount('#app')


// app.config.globalProperties.$filters = {
//     touppercase(value) {
//       return value.toUpperCase()
//     }
//   }