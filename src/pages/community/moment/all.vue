<template>
    <div id="moment-all">
        <MomentCard></MomentCard>

        <div class="rightSide">
            <div id="communityAffiche">
                社区公告
            </div>

            <div id="challengeAffiche">
                挑战公示
            </div>
        </div>
    </div>
</template>

<script>
import MomentCard from '@/components/community/moment/MomentCard.vue';
export default{
    name:'moment-all',
    components:{
        MomentCard
    }

}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#moment-all{
    width: 1120px;
    height: 480px;
    float: left;

    #detail{
        width: 800px;
        height: 100%;
        float: left;

        overflow: scroll;
        overflow-x: hidden;

    }

    .rightSide{
        width: 280px;
        height: 100%;
        float: right;
        background-color: white;

        #communityAffiche{
            width: 100%;
            height: 50%;
            background-color: pink;
        }

        #challengeAffiche{
            width: 100%;
            height: 50%;
            background-color: gold;
        }
    }
}
</style>