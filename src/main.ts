import { createApp } from "vue";
import{ createPinia } from 'pinia'
import "./style.css";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App)

const pinia = createPinia()


// 创建根存储库并将其传递给应用程序

app.use(pinia)

app.use(router)

app.mount("#app");
