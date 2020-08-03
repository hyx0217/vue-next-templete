import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MyIcon from '@/components/Icons/index.vue';
import HelloWorld from '@/components/HelloWorld.vue';
const app = createApp(App)
  .use(router)
  .use(store);

app.component('HelloWorld', HelloWorld);
app.component('MyIcon', MyIcon);
app.mount('#app');
