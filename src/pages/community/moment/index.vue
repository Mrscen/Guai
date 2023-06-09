<template>
    <div id="moment">
        <MomentNav></MomentNav>
        <router-view></router-view>
    </div>
</template>
<script>
import MomentNav from '@/components/community/moment/MomentNav.vue';
export default{
    name:'moment',
    components:{
        MomentNav,
    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#moment{
    display: inline-block;

    width: 1120px;
    height: 540px;

    position:relative;

    
}
</style>