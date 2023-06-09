<template>
    <div id="user">
        <CommonHeader></CommonHeader>
        <UserAside></UserAside>
        <router-view></router-view>
        <NftRole id="NftRole"></NftRole>
    </div>
</template>

<script>
import CommonHeader from '../../components/CommonHeader.vue'
import UserAside from '../../components/user/UserAside.vue'
import NftRole from '../../components/user/NftRole.vue'
export default {
    name:'user',
    components:{
        CommonHeader,
        UserAside,
        NftRole
    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#user{
    width: 1200px;
    height: 540px;

    position:relative;

    /* 为 子路由 预留空间 */    

    #NftRole{
        position: absolute;
        right: 0;
    }
}
</style>