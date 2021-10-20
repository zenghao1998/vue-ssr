import { createApp } from './app.js';
const { app, store } = createApp();
//客户端激活时替换state状态
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
};
app.$mount('#app');