<template>
    <div id="newUser">
        <h1>欢迎来到Guai的世界</h1>
        <!-- <button class="connection" @click="goto('/user')">连接钱包</button> -->
        <el-button class="connection" type="primary" :loading="isLoading_login" @click="login('/user')">登录</el-button>
        <el-button type="primary" :loading="isLoading_register" @click="register('/user')">注册</el-button>

        <br>
        <button class="introduction" @click="goto('/login/introduction_1')">
            <img src="../../assets/images/logo/goto_introduction.png" alt="">
        </button>
    </div>
</template>

<script>
export default{
  data () {
    return {
      isLoading_login: false,
      isLoading_register: false
    }
  },
  methods: {
    // 登录
    login (path) {
      this.isLoading_login = true
      // 连接钱包
      window.ethereum.enable().then(res => {
        const accountAddress = res[0]
        // 校验是否注册过
        console.log(this.$API)
        this.$API.default.contractApi.checkRegister(accountAddress).call((err, res) => {
          this.isLoading_login = false
          localStorage.setItem('isSign', res)
          this.$store.dispatch('base/setAccountAddress', accountAddress)
          this.$router.push(path)
        })
      })
    },
    // 注册流程
    register (path) {
      if (window.ethereum) {
        // console.log('isMetaMask:', window.ethereum.isMetaMask);
        // console.log('chainId:', window.ethereum.chainId);
        // 连接钱包
        this.isLoading_register = true
        window.ethereum.enable()
          .then((res) => {
            let accountAddress = res[0]

            console.log('当前钱包地址: ', accountAddress);
            // 校验账户是否注册过
            this.$API.default.contractApi.checkRegister(accountAddress).call((err, res) => {
              if (res === 'true') {
                this.register1(path,accountAddress)
              } else {
                this.isLoading_register = false
                this.$message({
                  message: res,
                  type: 'warning'
                });
              }
            })
          });
      } else {
        this.$message({
          message: '请安装metaMask(小狐狸钱包)',
          type: 'danger'
        });
      }
    },
    register1 (path,accountAddress) {
      // 注册
      this.$API.default.contractApi.register().send({ from: accountAddress })
        .on('confirmation', (confirmationNumber, receipt) => {
          //跳转首页（登录成功）
          if (confirmationNumber === 1) {
            this.isLoading_register = false
            // Vuex存储
            this.$store.dispatch('base/setAccountAddress', accountAddress)
            this.$router.push(path)
          }
        })
        .on('error', (error, receipt) => {
          // 登录失败
          this.isLoading_register = true
          this.$message({
            message: '登录失败',
            type: 'danger'
          });
        });
    },
  }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#newUser{
    width: 1200px;
    height: 600px;
    text-align: center;
    
    position: relative;

    h1{
        line-height: 200px;
    }

    .connection{
        width: 350px;
        height: 60px;
        font-size: 18px;
        background:none;

        border: 1px solid rgba(151, 71, 255, 1);
        border-radius: 20px;

        cursor: pointer;
    }

    .introduction{
        position:absolute;
        bottom: 50px;
        left: 48%;

        width: 50;
        height: 50;
        background: none;

        border: none;

        cursor: pointer;

    }
}
</style>