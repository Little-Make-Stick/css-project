import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'font-awesome/css/font-awesome.css'


const app = createApp(App);

// app.use(ElementUI)
app.use(ElementPlus);
app.use(router)
app.mount('#app');
