<template>
    <div id="introduction_2">
        <h1>游戏世界</h1>
        <h2>通过三个游戏和计数体验llluur的相互关联宇宙</h2>
        <div id="description">
            <ul>
                <li>
                    <div>
                        <h3>铸造数字人</h3>
                        <img src="../../assets/images/frame/introduction_frame.png">
                        <p>铸造数字人，每日打卡，自由换装，完成挑战，陪你一同PK。</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>迎接习惯挑战</h3>
                        <img src="../../assets/images/frame/introduction_frame.png">
                        <p>迎接挑战，养成良好习惯，可以发布、参与挑战</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>建设家园</h3>
                        <img src="../../assets/images/frame/introduction_frame.png">
                        <p>建造家园，开采资源，收获外来植物，并帮助坠毁的船员在发现导致这个星球毁灭的灾难性事件时蓬勃发展</p>
                    </div>
                </li>
            </ul>
        </div>
        <div id="footer">
            <button @click="goto('/login/newUser')">
                返回
            </button>
            <button @click="goto('/login/introduction_3')">
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
#introduction_2{
    position: relative;

    width: 1200px;
    height: 600px;

    text-align: center;

    #description{
        width: 1200px;
        height: 300px;

        ul{
            list-style-type: none;

            display: flex;
            justify-content: space-around;
            align-content: center;

            li{

                div{
                    width: 400px;
                    height: 300px;
                    margin-top: 100px;
                }
            }
        }
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