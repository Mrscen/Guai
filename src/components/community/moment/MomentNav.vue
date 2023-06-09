<template>
    <div id="MomentNav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="rgba(216,220,250,0.3)">
            <el-menu-item index="2" @click="goto('/community/moment/all')">全部动态</el-menu-item>
            <el-menu-item index="1" @click="goto('/community/moment/relevant')">与我相关</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name:'MomentNav',
    data(){
        return{
            // 指向当前所在页标签
            activeIndex: '1',
            activeIndex: '2',
        }
    },
    methods:{
        goto(path){
            this.$router.push(path)
        },

        // 菜单
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
        }
    }
}
</script>

<style>
*{
    /* 初始化内外边距 */
    margin: 0;
    padding: 0;
}
#MomentNav{
    width: 1120px;
    height: 60px;
    float: left;
}
</style>