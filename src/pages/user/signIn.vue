<template>
    <div id="signIn">
        <!-- 暂时不要 右上角关闭按键 ①不好实现关闭功能 ②布局容易被破坏 -->
        <!-- <a id="close" >
            <img src="../../assets/images/logo/close.png" alt="">
        </a> -->
        <div id="sign_in_image">
            <img src="../../assets/images/frame/sign_in.png" alt="">
        </div>
        <div id="sign_in_information">
            <ul>
                <li>
                    <p>
                        {{ total }}
                    </p>
                    <b>
                        总打卡 
                    </b>
                </li>
                <li>
                    <p>
                        {{ top }}
                    </p>
                    <b>
                        最高连续 
                    </b>
                </li>
                <li>
                    <p>
                        {{ current }}
                    </p>
                    <b>
                        当前连续 
                    </b>
                </li>
            </ul>

        </div>

        <el-button type="primary" :loading="isLoading" :disabled="isdisabled" @click="signIn">
          今日签到
        </el-button>

    </div>
</template>

<script>

export default {
    name:'signIn',
    data(){
        return{
            
            // 总打卡
            total:0,
            // 最高连续打卡
            top:0,
            // 当前连续打卡
            current:0,
            
            isLoading: false,
            isdisabled: false
        }
    },
    computed: {
        accountAddress () {
            return this.$store.state.base.accountAddress
        }
    },
    mounted () {
        // this.checkSign()
        // 初始化签到
        this.getSign(this.accountAddress)
    },
  methods: {
    // 签到
    signIn () {
      // 加载中
      this.isLoading = true

      let currentTime = this.calcTime(0)
      let lastTime = this.total === 0 ? 0 : this.calcTime(-1)

      this.$API.default.contractApi
        .sign(this.accountAddress, lastTime, currentTime)
        .send({ from: this.accountAddress })
        .on('confirmation', (confirmationNumber, receipt) => {
          // 签到成功，更新数据
          if (confirmationNumber === 1) {
            const { totalSign, maxContinuousSign, currentContinuousSign } = receipt.events.Respond.returnValues
            //更新打卡记录
            this.total = totalSign
            this.top = maxContinuousSign
            this.current = currentContinuousSign
            this.isLoading = false
            this.isdisabled = true
          }
        })
        .on('error', (error, receipt) => {
          // 签到失败
          console.log(error, receipt);
        })
    },
    // 返回签到
    getSign (accountAddress) {
      this.$API.default.contractApi.getSign(accountAddress).call((err, res) => {
        if (!err) {
          // console.log('返回签到成功', res);
          this.total = res[0]
          this.top = res[1]
          this.current = res[2]
          this.checkSign()
        } else {
          this.$message({
            message: '网络请求失败，请稍后再试',
            type: 'danger'
          });
        }
      })
    },
    // 监测今天是否签到了
    checkSign () {
      this.$API.default.contractApi.checkSign(this.accountAddress, this.calcTime(0)).call((err, res) => {
        localStorage.setItem('isSign', res)
        this.isdisabled = Boolean(!res)
      })
    },
    /*
    * @{day} 获取第几天的日期
    * 0 代表今天 、1 代表明天，以此类推
    */
    calcTime (day) {
      let now = new Date()
      // now.getTime()为当前时间戳 time为需要获取的那天的时间戳
      let time = now.getTime() + 1000 * 60 * 60 * 24 * day;

      // 用setTime转换，将now转换为需要获取的那天的时间
      // now.setTime(time)既是设置now的日期为：从1970.1.1开始走过time毫秒后的日期
      now.setTime(time);
      // 示例2023/4/15
      return `${now.getFullYear()}/${Number(now.getMonth() + 1)}/${now.getDate()}`
    }
    }
}

</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#signIn{
    width: 370px;
    height: 540px;

    background-color: white;

    position: relative;
    float: left;

    // #close{
    //     position: absolute;
    //     top: 15px;
    //     right: 15px;
    // }

    #sign_in_image{
        width: 370px;
        height: 400px;
        
        position: relative;

        img{
            position: absolute;
            top: 26%;
            left: 17%;
        }
    }
    
    #sign_in_information{
        width: 370px;
        height: 70px;

        ul{
            list-style-type: none;

            display: flex;
            justify-content: center;

            li{
                width: 100px;

                text-align: center;
            }
        }
    }
        
    button{
        width: 350px;
        height: 40px;
        margin: 20px 10px;

        background-color: #1F78D1;
        border: 1px solid #1F78D1;
        border-radius: 10px;

        color: white;


    }
    

}
</style>