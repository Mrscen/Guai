<template>
    <div id="ChallengeHotRank">
        <h3>热度挑战</h3>
        <ul>
            <li v-for="(challenge, index) in rank_list" :key="index">
                {{ challenge.challenge_title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name:'ChallengeHotRank',
    data(){
        return{
            rank_list:[
                {
                    id:1,
                    challenge_title:'挑战一：打爆产品',
                },
                {
                    id:2,
                    challenge_title:'挑战二：交互产品',
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#ChallengeHotRank{
    float: right;

    width: 280px;
    height: 270px;

    margin-top: 30px;

    ul{
        list-style-type: none;
    }
}
</style>