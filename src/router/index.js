import Vue from 'vue'
import Router from 'vue-router'
import poster from '../container/poster'
import goods from '../container/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'poster',
      component: poster
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    }
  ]
})
