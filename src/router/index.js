import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Detail from '@/page/detail/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/detail/:id/',
      name: 'detail',
      component: Detail,
      props: true,
      children: [{
        path: 'sight',
        name: 'sight',
        component: {
          template: '<div>sight</div>'
        }
      }, {
        path: 'ticket',
        name: 'ticket',
        component: {
          template: '<div>ticket</div>'
        }
      }]
    }
  ]
})
