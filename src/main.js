// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VModal from 'vue-js-modal'
import eruda from 'eruda';

import App from './App'
import router from './router'

eruda.init();
//
// const vConsole = new Vconsole()
// Vue.use(vConsole)

Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
