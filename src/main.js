import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.filter('capitalise', (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { 
    App 
  }
});
