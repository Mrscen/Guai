<template>
    <div id="community">
        <CommonHeader></CommonHeader>
        <CommunityAside></CommunityAside>

        <router-view></router-view>
        
    </div>
</template>
<script>
import CommonHeader from '../../components/CommonHeader.vue'
import CommunityAside from '../../components/community/CommunityAside.vue'

export default{
    name:'community',
    components:{
        CommonHeader,
        CommunityAside,
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#community{
    width: 1200px;
    height: 540px;

    position:relative;
}
</style>