import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

console.log("Test : ",store);

createApp(App).use(store).mount('#app')
