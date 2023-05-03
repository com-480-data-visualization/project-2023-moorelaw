import { createApp } from 'vue'
import App from './App.vue'
import VueFullPage from "vue-fullpage.js"
import 'virtual:uno.css'


import './assets/main.css'

let app = createApp(App);
app.use(VueFullPage);

app.mount('#app');

