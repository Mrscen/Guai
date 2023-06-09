<template>
    <div id="CreditSlot">

        <input type="text" placeholder="12345" readonly="readonly">
        <button>＋</button>
        <img src="../assets/images/logo/credit.png" alt="">
    </div>
</template>
<script>

export default{
    name:'CreditSlot'
}

</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#CreditSlot{
    /* 初始化 */
    width: 120px;
    height: 40px;
    padding: 10px;

    /* 进行 position - relative - absolute 定位 */
    position: relative;

    /* 设定 img 的格式 */
    img{
        position: absolute;
        top: 10px;
        left: 0;

    }

    /* 设定 input 的格式 */
    input{
        width: 100px;
        height: 25px;
        background-color: #E6E8F7;

        position:absolute;
        top: 18px;
        left: 20px;

        text-align: center;
        font-size:18px;
        border-left: none;
    }

    /* 设定 button 的格式 */
    button{
        width: 30px;
        height: 30px;
        background-color: #D9D9D9;

        position: absolute;
        top: 17px;
        right: 0px;

        border: 0px;
        border-radius: 100%;

        font-size: 30px;
        line-height: 0;
    }
    button:hover{
        box-shadow: 0px 0px 2px 2px  #222;
    }
}

</style>