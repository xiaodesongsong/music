<template>
  <div class="main-footer">
    <span>Wrriten by {{name}}</span>
  </div>
</template>
<script>
export default {
    data(){
        return{
            name:'yangsong'
        }
    }
}
</script>

<style lang="less" scoped>
.main-footer {
    margin-top:40px;
    text-align:center;
    font-style:italic;
    font-family:'Times New Roman', Times, serif;
    color:rgb(149,152,135);
    font-size:20px;
    text-shadow:0 1px 0 1px;
  }
</style>