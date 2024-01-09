import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ja from 'element-plus/es/locale/lang/ja';
import AmplifyVue from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import 'element-plus/dist/index.css';
import './assets/css/icon.css';
import { usePermissStore } from './store/permiss';


const app = createApp(App)
Amplify.configure(amplifyconfig);
app.use(createPinia());
app.use(AmplifyVue);
app.use(ElementPlus, {
    locale: ja,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)

// 自定义权限指令
const permiss = usePermissStore();
app.directive('permiss', {
    mounted(el, binding) {
        if (!permiss.key.includes(String(binding.value))) {
            el['hidden'] = true;
        }
    },
});

app.mount('#app')
