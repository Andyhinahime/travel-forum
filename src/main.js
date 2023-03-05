import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/text/text.css"
import VueQuillEditor from 'vue-quill-editor'  //引入富文本编译器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor);
import VueCoreImageUpload  from 'vue-core-image-upload';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
Vue.prototype.axios = axios;

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
