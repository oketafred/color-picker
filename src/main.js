import Vue from "vue";
import App from "./App.vue";

import Clipboard from 'v-clipboard'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

Vue.component(
  "VueFontawesome",
  require("vue-fontawesome-icon/VueFontawesome.vue").default
);

Vue.config.productionTip = false;

Vue.use(Clipboard)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
