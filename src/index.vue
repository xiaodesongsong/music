<template>
  <div id="app">
    <div class="login">
      <router-link to="/login">登录</router-link>
      <div @click="dindinkan">点击获取参数</div>
    </div>
    <div id="cover"></div>
      <Header />
      <Todo />
      <Footer />
  </div>
</template>

<script  >
import Header from './todo/header.vue';
import Footer from './todo/footer.vue';
import Todo from "./todo/todo.vue";
export default {
  data() {
    return {
    };
  },
  components:{
    Header,
    Footer,
    Todo
  },
  methods:{
    dindinkan(){
      console.log(this.$route.query.name)
    }
  }
};
</script>
<style scoped  lang="less">
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  background: url(./asstes/images/background01.jpg) no-repeat;
  background-size: 100% 100%;
  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #999;
    opacity: 0.3;
    z-index: -1;
     
  }
}
</style>