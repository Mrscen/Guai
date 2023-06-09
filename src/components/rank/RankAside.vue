<template>
    <div id="RankAside">
        <ul>
            <li>
                <button @click="goto('/rank/overall')">
                    <img src="../../assets/images/logo/moment.png">
                </button>
            </li>
            <li>
                <button @click="goto('/rank/progress')">
                    <img src="../../assets/images/logo/challenge.png">
                </button>
            </li>
            <li>
                <button @click="goto('/rank/property')">
                    <img src="../../assets/images/logo/check.png">
                </button>
            </li>
            <li>
                <button @click="goto('/rank/credit')">
                    <img src="../../assets/images/logo/check.png">
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'CommunityAside',
    methods:{
        goto(path){
            this.$router.push(path)
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
#RankAside{
    /* 设定尺寸、位置 */
    width: 80px;
    height: 540px;

    float: left;

    background-color: rgba(216,220,250,0.3) ;

    /* ul 采用 flex 布局 */
    ul{
        width: 80px;
        height: 540px;

        list-style-type: none;

        float: left;

        // 垂直居中
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li{
            margin: 20px 0px;

            button{
                background-color: rgba(216,220,250,0.3);

                border: none;
            }
            button:hover{
                background-color: #E6E8F7;
                border-radius: 5px;
                box-shadow: 0px 2px 2px 2px #333;

                cursor: pointer;
            }
        }

    }
}
</style>