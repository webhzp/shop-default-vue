import Vue from 'vue'
import App from './App'
import router from './router'

// 重置样式
import '../static/css/reset.css'

// 配置移动端自适配:安装lib-flexible、安装postcss-px2rem-exclude
import 'lib-flexible/flexible.js'

// 导入vant所有组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


// 引入axios请求数据
import axios from "./axios/request";
Vue.prototype.$axios = axios

// 引入vuex管理数据
import store from '@/store/store.js'

// 全局注册Loading
import Loading from '@/pages/common/loading/Loading'
Vue.component('Loading',Loading)

// 全局注册Scroller
import Scroller from '@/pages/common/scroller/Scroller'
Vue.component('Scroller',Scroller)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,// 全局注册 vuex状态管理
  components: { App },
  template: '<App/>'
})
