<template>
  <div id="app">
      <router-view />
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