// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//import $ from "jquery";
//IMPORT CSS
import "./assets/css/sidebar.css";
import "./assets/css/compiler.css";

//IMPORT BULMA
import 'bulma/css/bulma.css';

//IMPORT SEMANTIC UI
import SuiVue from 'semantic-ui-vue';
Vue.use(SuiVue);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
