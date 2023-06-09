<template>
    <div id="introduction_3">
        <h1>玩家的真正所有权</h1>
        <h2>
            利用区块链技术的力量，GuaiGuai让您完全拥有游戏内资产。你铸造的每一个数字人，你建造的每一块土地，你拥有的每一套套装......您所有辛苦赚来的资产都存储在一个地方，即您的以太坊钱包。每项资产都可以在以太坊区块链上验证，证明您的所有权。通过给予玩家真正的监护权（而不是属于游戏），您有权自行决定在市场上收集和交易游戏内物品和收藏品。
        </h2>
        <img src="../../assets/images/frame/introduction_3.png">

        <div id="footer">
            <button @click="goto('/login/newUser')">
                返回
            </button>
            <button @click="goto('/login/newUser')">
                开始
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
#introduction_3{
    position: relative;

    width: 1200px;
    height: 600px;

    text-align: center;

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