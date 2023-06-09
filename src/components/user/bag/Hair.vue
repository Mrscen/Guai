<template>
    <div id="Hair">
        <div id="dress_list">
            <ul>
                <li v-for="(item, index) in dress_list" :key="index">
                    <div class="dress_item" @click="payConfirm">
                        <img src="@/assets/images/logo/dress_logo/cloth.png" alt="">
                        <span>
                            <img src="@/assets/images/logo/gold.png" alt="">
                            <i>{{item.dress_pay}}</i>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'bag',
    data(){
        return{
            dress_list:[
                {
                    dress_image:'',
                    dress_pay:'16',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },

            ]
        }
    },
    methods:{
        // 确定购买 弹窗
        payConfirm(){
            this.$confirm('你确定花费 xxx 金币购买此道具吗？', '购买', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
        }).then(() => {
            this.$message({
            type: 'success',
            message: '购买成功!点击“我的”，即刻却换已购买的道具'
          });
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消购买'
          });
        });
        },
    },

    mounted(){
        // 获取装扮信息
        this.$API.getDress().then((res) => {
            var dress_info = res.data
            this.dress_list.push(dress_info)
        })
    }

}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#Hair{

    #dress_list{
        width: 650px;
        height: 320px;
        margin-left: 30px;

        ul{
            width: 650px;
            height: 320px;

            list-style-type: none;

            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            .dress_item{
                width: 80px;
                height: 120px;
                margin: 10px 10px;

                border: 1px solid #333;
                border-radius: 5px;

            img{
                width: 80px;
                height: 88px;
            }

            span{
                margin-left: 10px;

                img{
                    width: 15px;
                    height: 15px;
                }
            }
        }
        }

        
    }
}
</style>