import VueRouter from "vue-router";
import Hello from "../home/hello.vue";
import Index from '../index.vue';
import Login from "../login/login.vue";


export default new VueRouter({
  routes:[
    { 
      path: '/', 
      component: Hello
    },
    { 
      path: '/index', 
      name:Index,
      component: Index ,
      meta:{
        title:"首页",
         requireAuth: true, //开启拦截
      }
    },
    { 
      path: '/login', 
      component: Login,
      meta:{
        title: "欢迎来到登录中心",
      }
    }
  ]
})
