<template>
    <div id="CommonHeader">
        <ul id="banner">
            <li id="logo">
                <img src="../assets/images/logo/xiaoguai_logo.png" alt="">
            </li>
            <li>
                <ul class="nav">
                    <li @click="goto('/user')">
                        <a>
                            <img src="../assets/images/logo/xiaoguai.png" alt="">
                            小乖
                        </a>
                    </li>
                    <li @click="goto('/community')">
                        <a>
                            <img src="../assets/images/logo/community.png" alt="">
                            社区
                        </a>
                    </li>
                    <li @click="goto('/rank')">
                        <a>
                            <img src="../assets/images/logo/rank.png" alt="">
                            排行
                        </a>
                    </li>
                    <li @click="goto('/market');agreement()">
                        <a>
                            <img src="../assets/images/logo/market.png" alt="">
                            市场
                        </a>
                    </li>
                    <li @click="goto('/explore')">
                        <a>
                            <img src="../assets/images/logo/explore.png" alt="">
                            探索
                        </a>
                    </li>
                </ul>
            </li>
            <li class="account">
               <ul>
                <li>
                    <GoldSlot></GoldSlot>
                </li>
                <li>
                    <CreditSlot></CreditSlot>
                </li>
                <li>
                    <a href="http://localhost:8080/#/user/information">
                        <img src="../assets/images/logo/message.png" alt="">
                    </a>
                </li>
                <li id="avatar">
                    <el-dropdown>
                        <img src="../assets/images/frame/avatar.jpg" alt="">
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item class="drop-down" @click="goto('/account/resume')"> 账户 </el-dropdown-item>
                            <el-dropdown-item class="drop-down"> 设置 </el-dropdown-item>
                            <el-dropdown-item class="drop-down"> 登出 </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
               </ul> 
            </li>
        </ul>
    </div>
</template>

<script>
import GoldSlot from './GoldSlot.vue'
import CreditSlot from './CreditSlot.vue'
export default {
    name:'CommonHeader',
    components:{
        GoldSlot,
        CreditSlot,
    },
    data(){
        return{
            user_agreement: ''
        }
    },
    methods:{
        // 编程式路由，name：路径
        goto(path){
            this.$router.push(path)
        },

        // 小乖市场的用户协议
        agreement() {
        this.$confirm('在继续之前，您首先必须阅读并同意我们的条款和条件', 'GuaiGuai销售和拍卖条款和条件', {
          confirmButtonText: '接受并继续',
          cancelButtonText: 'GuaiGuai条款和条件',
          type: 'warning'
        }).then(() => {
        //   this.user_agreement = true
        this.$route.meta.user_agreement = true
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '嘿嘿，还没有用户条款'
          });          
        });
      }
    }
}
</script>

<style lang="less" scoped>
*{
    /* 初始化内外边距 */
    margin: 0;
    padding: 0;
}

#CommonHeader{
    /* 设定尺寸、位置 */
    width: 1200px;
    height: 60px;

    background-color: rgba(216, 220, 250, 0.3);

    /* 设定 ul 的格式 */
    #banner{
        list-style-type: none;
        overflow: hidden;
        
        /* 设定 li 的格式 */
        li{
            float: left;

            /* 设定 nav 的格式 */
            .nav{
                list-style-type: none;
                li{
                    width: 50px;
                    height: 56px;
                    padding: 2px 16px;

                    a{
                        width: 50px;
                        height: 60px;
                        display: block;
                        text-align: center;
                        text-decoration: none;
                    }

                    img{
                        margin: 0 auto;
                        width: 30px;
                        height: 30px;
                    }
                }
                li:hover{
                    background-color: #D8DCFA;
                }
            }
            .nav:hover{
                cursor: pointer;
            }
        }

        /* 设定 logo 的格式 */
        #logo{
            img{
                width: 300px;
                height: 60px;
            }
        }

        /* 设定 account 列表样式 */
        .account {
            float: right;

            ul{
            list-style-type: none;

                /* 设置 各项间 样式 */
                li{
                    margin-left: 15px;
                }

                /* 设定 avatar头像 格式 */
                #avatar img{
                    width: 60px;
                    height: 60px;

                    border-radius: 100%;
                }

            }
        }
    }
  .drop-down{
    vertical-align: top;
    margin: 10px 10px;
  }
}
</style>