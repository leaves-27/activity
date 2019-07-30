import Vue from 'vue'
import Router from 'vue-router'
import poster from '../container/poster'
import goodDetail from '../container/good-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'poster',
      component: poster
    },
    {
      path: '/good-detail',
      name: 'goodDetail',
      component: goodDetail
    }
  ]
})
