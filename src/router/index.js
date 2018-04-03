import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        require: false,
        b: true
      },
      component: function (resolve) {
        require(['@/components/login'], resolve)
      }
    },
    {
      path: '/main',
      name: 'main',
      component: function (resolve) {
        require(['@/components/main'], resolve)
      },
      children: [
        {
          path: '/main/articleManage',
          name: 'articleManage',
          meta:{
            title:['文章管理','文章列表'],  
            addBtnText:'新建'                      
          },
          component: function (resolve) {
            require(['@/components/articleManage/articleManageList.vue'], resolve)
          },
        },
        {
          path: '/main/orderPage',
          name: 'orderPage',
          meta:{
            title:['定制页面'],            
            hasAuth:['教育系统','明政系统'],
            addBtnText:'新增页面'                      

          },
          component: function (resolve) {
            require(['@/components/orderPage/orderPageList.vue'], resolve)
          },
        }
      ]
    }
  ]
})
