/*
项目的启动入口
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式文件
import './styles/index.less'

Vue.config.productionTip = false
// 创建vue跟实例，把router配置在跟实例中
// 通过render方法吧App渲染到#app入口节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// $mount('#app')等价于el:'#app'
