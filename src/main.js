import { createApp } from 'vue';
import App from './components/AppLayout/index.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import JsonViewer from 'vue-json-viewer/ssr';
import 'vue-json-viewer/style.css';

createApp(App).use(ElementPlus).use(JsonViewer).use(store).use(router).mount('#app');
