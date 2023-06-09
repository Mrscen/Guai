<template>
    <div id="market">
        <common-header></common-header>
        <MarketAside></MarketAside>
        <router-view></router-view>


    </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import MarketAside from "@/components/market/MarketAside.vue";
export default{
    name:'market',
    components:{
        CommonHeader,
        MarketAside
    }
}
</script>