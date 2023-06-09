<template>
    <div id="check">
        <CheckNav></CheckNav>
        <router-view></router-view>
    </div>
</template>

<script>
import CheckNav from '../../../components/community/check/CheckNav.vue'
export default{
    name:'check',
    components:{
        CheckNav
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#check{
    width: 1120px;
    height: 540px;

    float: left;
}
</style>