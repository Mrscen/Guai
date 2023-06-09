<template>
    <div id="checking">
        <!-- 提供审评的挑战卡片 -->
        <div id="challengeCard">
            <ChallengeCard style="height:480px"></ChallengeCard>
        </div>

        <!-- 挑战审评公告 -->
        <div id="checkAffiche">
            <ul>
                <li>
                    什么挑战完成任务评测？
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ChallengeCard from '@/components/community/challenge/ChallengeCard.vue';
export default{
    name:'checking',
    components:{
        ChallengeCard
    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#checking{
    width: 1120px;
    height: 480px;
    float: left;

    #challengeCard{
        width: 767px;
    }

    #checkAffiche{
        width: 300px;
        height: 480px;

        float: right;

        ul{
            list-style-type: none;
        }
    }
}

</style>