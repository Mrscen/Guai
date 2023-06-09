<template>
    <div id="challenge">
        <div id="detail">
            <ChallengeCard></ChallengeCard>
        </div>

        <div id="rightSide">
            <ChallengeHotKey></ChallengeHotKey>
            <ChallengeHotRank></ChallengeHotRank>
        </div>

    </div>
</template>
<script>
import ChallengeNav from '../../../components/community/challenge/ChallengeNav.vue'
import ChallengeCard from '@/components/community/challenge/ChallengeCard.vue'
import ChallengeHotRank from '@/components/community/challenge/ChallengeHotRank.vue'
import ChallengeHotKey from '@/components/community/challenge/ChallengeHotKey.vue'
export default{
    name:'challenge',
    components:{
        ChallengeNav,
        ChallengeCard,
        ChallengeHotRank,
        ChallengeHotKey
    },
    data(){
        return{
            
        }
    },
    methods:{
        // 路由跳转
        goto(path){
            this.$router.push(path)
        }
    },

}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#challenge{
    float: left;

    width: 1120px;
    height: 540px;


    position:relative;

    #detail{
        width: 767px;
        height: 540px;

        float: left;
    }
    
    #rightSide{
        width: 280px;
        height: 540px;
        margin-left: 40px;

        float: right;

        
        #search-keyword{
            width: 280px;
            height: 270px;

        }

    }
}
</style>