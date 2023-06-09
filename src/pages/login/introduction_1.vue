<template>
    <div id="introduction_1">
        <h1>Guai</h1>
        <div id="description">
            <p>这是一个基于区块链的游戏，通过培养属于自己的数字人，坚持打卡，完成挑战，培养个人习惯，与广大网友一同创造梦幻家园，打造真实自我。</p>
        </div>
        <div id="demo_video">
            演示视频
        </div>
        <div id="footer">
            <button @click="goto('/login/newUser')">
                返回
            </button>
            <button @click="goto('/login/introduction_2')">
                继续
            </button>
        </div>
    </div>
</template>

<script>
export default{
    methods:{
        goto(path){
            this.$router.push(path)
        }
}
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#introduction_1{
    position: relative;
    width: 1200px;
    height: 600px;

    text-align: center;

    #description{
        width: 30%;
        height: 100%;
        margin:150px 10px 150px 150px;

        float: left;
    }

    #demo_video{
        width: 30%;
        height: 100%;
        margin:150px 150px 150px 10px;

        float: left;
    }

    #footer{
        position: absolute;
        bottom:50px;
        left: 38%;

        button{
            width: 100px;
            height: 50px;
            margin: 0px 30px;
            background: none;
            
            border: 1px solid rgba(151, 71, 255, 1);
            border-radius: 10px;

            cursor: pointer;
        }
    }
}
</style>