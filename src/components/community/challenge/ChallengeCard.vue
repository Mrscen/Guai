<template>
    <div id="ChallengeCard" >
        <el-button @click="goto('/community/createChallenge')">发起挑战</el-button>

        <!-- 挑战卡片列表 -->
        <ul>
            <li v-for="(card, index) in challenge_list" :key="index">
                <!-- 挑战卡片 -->
                <div class="detail">
                    <img src="../../../assets/images/frame/challenge_01.png" alt="">
                    <p>{{card.title}}</p>
                    <i>{{card.start_date}}</i>
                    <i>{{card.end_date }}</i>
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
                    title:'挑战昵称',
                    start_date:'剩余时间',
                    end_date:'结束时间',
                    reward:'20'
                },
                {
                    id:2,
                    title:'挑战昵称2',
                    start_date:'剩余时间',
                    end_date:'结束时间',
                    reward:'20'
                },
            ]
        }
    },

    methods:{
        // 路由跳转
        goto(path){
            this.$router.push(path)
        },

        // 添加挑战
        addChallenge(user_id,issue_data,title,rule,reward,start_data,end_data){
            this.$API.addChallenge(user_id,issue_data,title,rule,reward,start_data,end_data)
        }
    },

    mounted(){
        this.$API.getChallenge().then((res) => {
            var challenge_list_info = res.data
            for(let i = 0; i < challenge_list_info.length; i++){
                this.challenge_list.push(challenge_list_info[i])
            }
            console.log('挑战列表请求成功')
        }).catch((err) => {
            console.log(err)
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
    height: 540px;


    overflow: scroll;
    overflow-x: hidden;

    float: left;

    button{
            width: 100px;
            height: 30px;
            margin: 10px 10px;    
            text-align: center;
        }


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