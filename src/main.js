import Vue from "vue";
import App from "./App.vue";

import Clipboard from 'v-clipboard';

import './assets/main.css';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

Vue.component(
  "VueFontawesome",
  require("vue-fontawesome-icon/VueFontawesome.vue").default
);

Vue.config.productionTip = false;

Vue.use(Clipboard)

new Vue({
  provide: () => {
    return {
      notyf: new Notyf({
        duration: 5000, // Set your global Notyf configuration here
        position: {
          x: 'right',
          y: 'top',
        },
      })
    }
  },
  render: (h) => h(App),
}).$mount("#app");
