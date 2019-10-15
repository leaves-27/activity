import Vue from 'vue'
import Router from 'vue-router'
import poster from '../container/poster'
import goodDetail from '../container/good-detail'
import goods from '../container/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'poster',
      component: poster,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/good-detail',
      name: 'goodDetail',
      component: goodDetail
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      meta: {
        keepAlive: true
      }
    }
  ]
})
