<template>
    <div id="ChallengeHotKey">
        <h3>热搜关键词</h3>
            <div class="one_left">
                <ul class="fire_logo"><img src="@/assets/images/logo/Vector1-.png" alt=""><span>早起</span></ul>
                <ul class="fire_logo"><img src="@/assets/images/logo/Vector2.png" alt=""><span>英语</span></ul>
                <ul class="fire_logo"><img src="@/assets/images/logo/Vector3.png" alt=""><span>日志</span></ul>
                <ul class="fire_logo"><img src="@/assets/images/logo/Vector4.png" alt=""><span>汇报</span></ul>
                <ul class="fire_logo"><img src="@/assets/images/logo/Vector5.png" alt=""><span>摄影</span></ul>
            </div>
            <div class="two_right">
                <ul class="fire_logo"><img src="@/assets/images/logo/Vector 6.png" alt=""><span>英语</span></ul>
                <ul class="fire_logo"><img src="@/assets/images/logo/Vector7.png" alt=""><span>脱口秀</span></ul>
                <ul class="fire_logo"><img src="@/assets/images/logo/Vector8.png" alt=""><span>编程</span></ul>
                <ul class="fire_logo"><img src="@/assets/images/logo/Vector9.png" alt=""><span>礼仪</span></ul>
                <ul class="fire_logo"><img src="@/assets/images/logo/Vector10.png" alt=""><span>武术</span></ul>
            </div>
    </div>
</template>

<script>
export default{
    name:'ChallengeHotKey',
}

</script>

<style lang="less" scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .chalenge-scoll::-webkit-scrollbar {
        display: none;
    }

    .chalenge-scoll {
        margin-top: 7px;
        height: calc(100% - 35px);
        width: 280px;
        overflow: auto;
    

    }
.antistop {
    height: 25px;
    width: 280px;
    font-size: 18px;
    padding-left: 50px;
  
}
    .one_left {
      
        width: 140px;
        height: calc(100% - 25px);
        float: left;
    }

    .two_right { 
       
        width: 140px;
        height: calc(100% - 25px);
        float: left;
    }
    .fire_logo {
        margin-top: 3px;
        height: calc(100%/5 - 2px);
        width: 140px;
      
       
    }

    #challenge {
        float: left;
        width: 1120px;
        height: 540px;


        #detail {
            width: 767px;
            height: 540px;

            float: left;
        }

        #rightSide {
            width: 280px;
            height: 540px;
            margin-left: 40px;
            float: right;
           


            #search-keyword {
                width: 280px;
                height: 270px;
                
               
            }
            #search-keyword span {
                font-size: 14px;
                margin-left: 15px;
              
            }

            #hot-challenge {
                width: 280px;
                height: 270px;
               

            }
        }
    }
</style>