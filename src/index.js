import Vue from 'vue';
import App from './app.vue';
import router from './router';
import './asstes/style/public.css';
import VueRouter from 'vue-router';

router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin');
  if (to.meta.requireAuth&&!isLogin) {  
    next({
        path: '/login'
    })
  }
  else {
      next();
  }
})
Vue.use(VueRouter);
new Vue({
  router,
  el:'#root',
  render:h=>h(App)
});