<template>
    <div id="invite">
        <!-- <button id="add_code" @click="addCode">···</button> -->
        <el-button type="primary" id="add_code" :loading="isloading" @click="addInviteCode" plain>邀请好友</el-button>
        <p>邀请好友专区积分</p>
        <p>邀请好友使用“小乖”，请对方注册并填写下方邀请码，双方皆可获得 9999999 金币的友情奖励！</p>

        <div id="invite_code">{{ accountAddress}}</div>

        <div id="descript">
            <p>每位注册用户都有自己专属的邀请码，每位受邀者仅能输入一次邀请码。</p>
            <p>1、如何找到自己的邀请码？</p>
            <p>登录账户->我的->邀请</p>
            <p>2、如何输入好友的邀请码？</p>
            <p>左上角的···</p>
            
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
    name:'invite',
    data(){
        return{
            isloading: false
        }
    },
    computed: {
        // 邀请码
        ...mapState('base', ['accountAddress'])
    },
  methods: {
    // 输入邀请码（，待）
    addInviteCode () {
      this.$prompt('请输入邀请码', '提示', {
        confirmButtonText: '邀请',
        cancelButtonText: '取消',
        inputPattern: /^0x[a-fA-F0-9]{40}$/,
        inputErrorMessage: '邀请码格式不正确'
      }).then(({ value }) => {
        //监测该账户是否可以邀请
        this.$API.default.contractApi.checkInvite(this.accountAddress, value).call((err, res) => {
          if (res === 'true') {
            this.invited(value)
          } else {
            this.$message({
              message: res,
              type: 'warning'
            });
          }
        }).catch( err => {
            this.$message({
              message: '失败',
              type: 'danger'
            });          
        })
      })
    },
    // 邀请
    invited (value) {
      this.isloading = true

      this.$API.default.contractApi
        .invited(this.accountAddress, value)
        .send({ from: this.accountAddress })
        .on('confirmation', (confirmationNumber, receipt) => {
          // 邀请成功
          if (confirmationNumber === 1) {
            this.isloading = false
            this.$message({
              type: 'success',
              message: '邀请成功,奖励5分钟内自动发放,请耐心等待哦'
            })
          }
        }).on('error',err => {
            this.$message({
              message: '失败',
              type: 'danger'
            });                
        })
    },
    // 检查是否可以邀请 （废弃）
    checkInvite (value) {
      this.$API.default.contractApi.checkInvite(this.accountAddress, value).call((err, res) => {
        return res
      })
    }
  } 
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#invite{

    width: 370px;
    height: 540px; 
    background-color: white;

    float: left;

    p{
        margin: 20px 10px;
    }
    
    #add_code{
        width: 80px;
        height: 30px;
        display: block;
        background-color: white;

        font-size: 50px;
        line-height: 30px;

        border: none;
    }
    #add_code:hover{
        cursor: pointer;
    }

    #invite_code{
        width: 345px;
        height: 28px;
        margin: 0 auto;
        background-color: #D8DCFA;

        border-radius: 10px;

        text-align: center;
    }

    #descript{
        width: 370px;
        height: 300px;
    }
}
</style>