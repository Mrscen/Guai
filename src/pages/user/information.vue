<template>
    <div id="information">
        <ul>
            <li v-for="(item, index) in affiche_list" :key="index">
                <div class="detail">
                    <em class="date">{{ item.date }}</em>
                    <em class="activity_name">{{ item.activityName }}</em>
                    <img src="../../assets/images/frame/activity.png" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name:'information',
    data(){
        return{
            affiche_list:[
                {
                    date:'2002.02.02',
                    activityName:'jerc',
                }
            ]
        }
    },
    mounted(){
        // 获取公告信息
        this.$API.getAffiche().then((res) => {
            console.log('公告获取成功！')
            var affiche_list_info = res.data
            for(let i = 0; i < affiche_list_info.length; i++){
                if(res.data.date){ // 没有数据就不呈现
                    this.affiche_list.push(affiche_list_info[i])
                }
            }
        })
    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#information{
    width: 370px;
    height: 540px;

    background-color: white;

    position: relative;
    float: left;

    overflow: scroll;
    overflow-x: hidden;

    
    // #close{
    //     position: absolute;
    //     top: 15px;
    //     right: 15px;
    // }

    .detail{
        width: 330px;
        height: 170px;
        margin: 10px 10px;



        .date{
            float: left;
        }

        .activity_name{
            float:right;
        }

        img{
            width: 330px;
            height: 160px;
            margin-top: 10px;
        }
    }
}
</style>