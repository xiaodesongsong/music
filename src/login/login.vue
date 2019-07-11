<template>
  <div class="box">
    <span>账号:<input id="name" ref = "name"></span>
    <span>密码:<input id="password" ref = "password"></span>
    <div class="submit" @click="submit">
      登录
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name:'123',
    }
  },
  methods:{
    submit(){
      let name = this.$refs.name.value;
      let pass = this.$refs.password.value;
      if( name == this.name ){ 
        sessionStorage.setItem("isLogin", 1);
        // this.$router.replace({
        //   path:'/index',
        // })
      }
      this.$router.replace({
        path:'/index',  
        query:{
          name:name
        }  
      })
      
    }
  }
}
</script>
<style lang="less" scoped>
  .box{
    width: 500px;
    height: 300px;
    background-color:#ffffff;
    border-radius: 10px;
    margin: 60px auto;
    padding-top: 10px;
    span{
      display: block;
      margin: 20px auto;
      font-size: 20px;
      text-align: center;
      input{
        height: 30px;
        margin-left: 20px;
        width: 200px;
        outline: none;
        padding-left: 10px;
        background-color: #ffffff;
      }
    }
    .submit{
      width: 300px;
      height: 70px;
      background-color: red;
      display: flex;
      color:#ffffff;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 800;
      margin: 20px auto;
    }
  }
</style>
