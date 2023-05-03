import { createApp } from 'vue'
import App from './App.vue'
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from "vue-fullpage.js"
import 'virtual:uno.css'


import './assets/main.css'

let app = createApp(App);
app.use(VueFullPage);

app.mount('#app');

