<template>
    <div id="introduction_3">
        <h1>全部收集</h1>
        <h2>
            迎接挑战………………………………………………………………发现、猎杀和捕获超过 150+ 个 Illuvials，统治这个外星世界的致命野兽——每个人都拥有强大的能力和协同作用。训练你的 Illuvial 以增加他们的力量并将它们融合在一起以创建提升的形式，因为你建立了完美的 Illuvial 团队。
        </h2>
        <img src="../../assets/images/frame/introduction_3.png" alt="">

        <div id="footer">
            <button @click="goto('/login/newUser')">
                返回
            </button>
            <button @click="goto('/login/introduction_4')">
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