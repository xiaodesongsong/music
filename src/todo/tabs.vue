<template>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}}items left</span>
        <span class="tabs">
        <span v-for="state in states" :key="state" :class="[filter == state?'active':'']" @click="toggleFiter(state)">
            
        {{state}}
        </span>
        </span>
        <span class="clear" @click="clearAllCompleted">Clear completed</span>
    </div> 
</template>
<script>
export default {
    data(){
        return{
            states:['all','active','completed'],
        }
    },
    props:{
        filter:{
            type:String,
            required:true//声明是必须传的值
        },
        todos:{
            type:Array,
            required:true
        }
    },
    methods:{//自定义方法
        clearAllCompleted(){
            this.$emit('clearAll');
        },
        toggleFiter(state){
            this.$emit('toggle' , state)
        }
    },
    computed:{//计算属性声明
        unFinishedTodoLength(){
            return this.todos.filter(todo => !todo.completed).length
        }
    }
}
</script>
<style lang="less" scoped>
.helper {
    font-weight: 100;
    display:flex;
    justify-content:space-between;
    padding:5px 0;
    line-height:30px;
    background-color:#ffffff;
    font-size: 14px;
    font-smoothing: antialiased;
}
.left, .clear, .tabs {
    padding:0 10px;
    box-sizing:border-box;
}
.left, .clear {
    width:150px;
}
.left {
    text-align: left;
}
.clear {
    text-align: right;
    cursor: pointer;
}
.tabs {
    width:200px;
    display :flex;
    justify-content: space-around;
    * {
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
        border:1px solid rgba(175, 47, 47, 0);
        &.active {
            border-color:red;
            border-radius:7px;
        }
    }
}

</style>
