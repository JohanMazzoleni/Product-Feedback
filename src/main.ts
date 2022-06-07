import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./index.css";
import "./css/global.scss";

createApp(App).use(router).mount("#app");
