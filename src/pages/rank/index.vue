<template>
    <div id="rank">
        <CommonHeader></CommonHeader>
        <RankAside></RankAside>

        <router-view></router-view>

    </div>
</template>

<script>

import CommonHeader from "@/components/CommonHeader.vue";
import RankAside from "@/components/rank/RankAside.vue";


export default {
    name:'rank',
    components:{
        CommonHeader,
        RankAside
    }
}
</script>