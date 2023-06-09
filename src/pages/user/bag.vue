<template>
    <div id="bag">
        <!-- 选择 市场和我的 -->
        <div id="banner">
            <ul>
                <li><a href="">全部</a></li>
                <li><a href="">我的</a></li>
            </ul>
        </div>

        <!-- 奇怪的导航栏 -->
        <div id="nav">
            <ul>
                <li>
                    <a @click="goto('/user/bag/outer')">
                        <img src="../../assets/images/logo/dress_logo/上衣 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a @click="goto('/user/bag/skin')">
                        <img src="../../assets/images/logo/dress_logo/上衣 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a @click="goto('/user/bag/shoes')">
                        <img src="../../assets/images/logo/dress_logo/套装 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a @click="goto('/user/bag/pants')">
                        <img src="../../assets/images/logo/dress_logo/裤子1.png" alt="">
                    </a>
                </li>
                <li>
                    <a @click="goto('/user/bag/glass')">
                        <img src="../../assets/images/logo/dress_logo/鞋子 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a @click="goto('/user/bag/hair')">
                        <img src="../../assets/images/logo/dress_logo/眼镜 1.png" alt="">
                    </a>
                </li>
            </ul>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'bag',
    data(){
        return{
        }
    },
    methods:{
        goto(path){
            this.$router.push(path)
        },
    },

}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#bag{
    width: 700px;
    height: 540px;

    background-color: white;

    position: relative;
    float: left;

    #banner{
        margin: 30px 30px;
        
        ul{
            list-style-type: none;
            
            li{
                display: inline;

                margin: 10px 10px;

                a{
                    text-decoration: none;
                }
            }
        }
    }

    #nav{

        ul{
            list-style-type: none;

            display: flex;
            justify-content: center;
            
            
            li{
                display: inline;

                margin: 10px 15px;

                cursor: pointer;

            }
        }
    }
}
</style>