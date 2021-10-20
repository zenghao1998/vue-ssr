import Vue from 'vue'
import App from './App.vue'
import createStore from './store/index.js';
import createRouter from './router/index.js';
//每次访问都创建一个新的vue 主要用于服务端
export function createApp() {
    const store = createStore();
    const router = createRouter();
    const app = new Vue({
        store,
        router,
        render: h => h(App)
    })
    return { app, store, router }
}