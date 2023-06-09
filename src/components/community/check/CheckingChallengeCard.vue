<template>
    <div id="ChallengeCard" >

        <!-- 挑战卡片列表 -->
        <ul>
            <li v-for="(card, index) in challenge_list" :key="index">
                <!-- 挑战卡片 -->
                <div class="detail">
                    <img src="../../../assets/images/frame/challenge_01.png" alt="">
                    <p>{{card.challenge_title}}</p>
                    <i>{{card.dateRemain}}</i>
                    <i>{{card.end_time }}</i>
                    <div id="reward">
                        <b>奖励：{{ card.reward }}金币</b>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default{
    name:'ChallengeCard',

    props:[

    ],

    data(){
        return{
            challenge_list:[
                {
                    id:1,
                    challenge_title:'挑战昵称',
                    dateRemain:'剩余时间',
                    end_time:'结束时间',
                    reward:'20'
                },
                {
                    id:2,
                    challenge_title:'挑战昵称2',
                    dateRemain:'200D',
                    end_time:'20202021290',
                    reward:'30'
                },
                {
                    id:2,
                    challenge_title:'挑战昵称2',
                    dateRemain:'200D',
                    end_time:'20202021290',
                    reward:'30'
                },
                {
                    id:2,
                    challenge_title:'挑战昵称2',
                    dateRemain:'200D',
                    end_time:'20202021290',
                    reward:'30'
                },
                {
                    id:2,
                    challenge_title:'挑战昵称2',
                    dateRemain:'200D',
                    end_time:'20202021290',
                    reward:'30'
                },
                {
                    id:2,
                    chellenge_title:'挑战昵称2',
                    dateRemain:'200D',
                    end_time:'20202021290',
                    reward:'30'
                }
            ]
        }
    },

    methods:{
        // 路由跳转
        goto(path){
            this.$router.push(path)
        }
    },

    created(){
        // 获取 挑战卡片所需的信息
        axios({
            url:'/xg/get_challenge_info',
            method:'GET',
            data:{
                challenge_id,
                user_id,
                challenge_title,
                end_time,
                rewards
            }
        }).then(res => {
            let challenge_information = {
                challenge_id,
                user_id,
                challenge_title,
                end_time,
                rewards
            }
            this.challenge_list.push(challenge_information)
        })
    }
    }
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#ChallengeCard{
    width: 767px;
    height: 480px;

    overflow: scroll;
    overflow-x: hidden;

    float: left;



    ul{
        list-style-type: none;
    }
    
    .detail{
        width: 750px;
        height: 100px;
        margin-bottom: 5px;
        background-color: white;


        float: left;

        img{
            width: 100px;
            height: 100px;
        
            float: left;
        }
    
           // 挑战名称
        p{
            margin: 10px 10px;
        
            font-size: 30px;
            font-weight: bold;
        }
    
            // 两个日期
        i{
            margin: 0px 10px;
        }
    
        
        
        #reward{
            width: 150px;
            height: 100px;
        
            float: right;
        
            b{
                margin: 30px 10px;
            }
        }
}
}

</style>