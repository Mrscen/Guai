<template>
  <div id="addRole">
    <ul>
      <li><el-button class="add_btn" @click="outerVisible = true">+</el-button></li>
      <li v-for="(i, index) in nftArray.length" :key=index>
        <div class="add_btn">
          <img src="../../assets/images/frame/NTF_role_ori.png" alt="">
        </div>
      </li>
    </ul>

    <!-- 弹窗部分 -->
    <el-dialog title="角色创建" :visible.sync="outerVisible">
      <el-dialog width="30%" title="确认" :visible.sync="innerVisible" append-to-body>
        您确定要使用xxx代币铸造此数字人吗?
        <div slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = false">取 消</el-button>
          <el-button type="primary" :loading="isLoading" @click="mintNFT">创 建</el-button>
        </div>
      </el-dialog>
      <!-- 弹窗内容部分 -->
      <img src="../../assets/images/frame/NTF_role_ori.png">
      <ul id="dialog_list">
        <li>
          <h4 for="">昵称</h4>
          <el-input v-model="name" placeholder="唯一标识"></el-input>
        </li>
        <li>
          <h4 for="">梦想标签</h4>
          <el-input v-model="description" placeholder="例:UI设计师"></el-input>
        </li>
      </ul>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true">创 建</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nftArray: [],
      name: '',
      description: '',
      outerVisible: false,
      innerVisible: false,
      isLoading: false
    };
  },
  computed: {
    accountAddress () {
      return this.$store.state.base.accountAddress
    }
  },
  mounted () {
    this.getAll(this.accountAddress)
  },
  methods: {
    // 创建nft流程
    mintNFT () {
      // 检查是否存在该nft
      this.$API.default.contractApi.checkMint(this.name, this.accountAddress).call((err, res) => {
        if (!err) {

          if (res === 'true') {
            // 创建nft
            this.mint()
          } else {
            // nft已被创建
            this.$message({
              message: res,
              type: 'warning'
            });
          }

        } else {
          this.$message({
            message: '网络请求失败,请稍后再试',
            type: 'danger'
          });
        }
      })

    },
    // 创建nft
    mint () {
      this.isLoading = true
      this.$API.default.contractApi
        .mint(this.name, this.description)
        .send({ from: this.accountAddress, value: 1 })
        .on('confirmation', (confirmationNumber, receipt) => {
          // 创建nft成功，更新数据
          if (confirmationNumber === 1) {
            this.isLoading = false
            this.innerVisible = false
            this.outerVisible = false
            this.$message({
              message: `创建NFT( ${this.name} )成功`,
              type: 'success'
            });
            this.getAll(this.accountAddress)
          }
        })
        .on('error', (error, receipt) => {
          // 创建失败
          this.$message({
            message: `创建NFT( ${this.name} )失败`,
            type: 'danger'
          });
          this.isLoading = false
        })
    },
    // 返回账户下所有nft信息
    getAll (accountAddress) {
      // 全屏加载中
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.$API.default.contractApi.getAll(accountAddress).call((err, res) => {
        if (!err) {
          // 所有nft信息数组中每个项都是
          this.nftArray = res
          loading.close()
        } else {
          // 查询所有nft失败
          this.$message({
            message: `网络请求错误,未查询到nft信息,请稍后再试`,
            type: 'danger'
          });
        }
      })
    },
    // 添加经验
    addEXP (tokenId, Exp) {
      this.$API.default.contractApi
        .addEXP(tokenId, Exp)
        .send({ from: this.accountAddress })
        .on('confirmation', (confirmationNumber, receipt) => {
          // 签到成功，更新数据
          if (confirmationNumber === 1) {
            console.log('创建成功');
          }
        })
        .on('error', (error, receipt) => {
          // 签到失败
          console.log(error, receipt);
        })
    },
    // 智能合约发放测试币奖励
    distributeRewards (value) {
      this.$API.default.contractApi
        .distributeRewards(this.accountAddress, value)
        .send({ from: this.accountAddress })
        .on('confirmation', (confirmationNumber, receipt) => {
          // 签到成功，更新数据
          if (confirmationNumber === 1) {
            console.log('创建成功');
          }
        })
        .on('error', (error, receipt) => {
          // 签到失败
          console.log(error, receipt);
        })
    },
    // 发行nft
    issue () {
      const initPictureArray = ['1', '2', '3', '4', '5', '6']
      const showPictureArray = ['7', '8', '9', '10', '11', '6']
      this.$API.default.contractApi
        .issue(1, initPictureArray, showPictureArray)
        .send({ from: this.accountAddress })
        .on('confirmation', (confirmationNumber, receipt) => {
          // 签到成功，更新数据
          if (confirmationNumber === 1) {
            console.log('发行成功');
          }
        })
        .on('error', (error, receipt) => {
          // 签到失败
          console.log(error, receipt);
        })

    },
    // 检查是否存在该nft(废弃)
    checkMintNFT () {
      this.$API.default.contractApi.checkMintNFT(this.name, this.accountAddress).call((err, res) => {
        if (!err) {
          console.log(res);
          if (res === 'true') {
            console.log(res);
          }
        } else {
          console.log(err);
        }
      })
    },
    // 返回对应nft编号的元信息(废弃)
    getImformation () {
      this.$API.default.contractApi.getImformation(4).call((err, res) => {
        if (!err) {
          // 名字 标签 等级 经验
          console.log(res);
        } else {
          console.log(err);
        }
      })
    },
    // 返回账户下所有nft编号(废弃)
    getNFTs (accountAddress) {
      this.$API.default.contractApi.getNFTs(accountAddress).call((err, res) => {
        if (!err) {
          // 名字 标签 等级 经验
          console.log(res);
        } else {
          console.log(err);
        }
      })
    }

  }
}
</script>


<style lang="less" scoped>
#addRole {
  display: inline-block;
  position: absolute;

  width: 370px;
  height: 540px;

  background-color: white;

  ul {
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  ul li {
    display: inline-block;
    list-style: none;
  }

  .add_btn {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    width: 100px;
    height: 150px;
    margin: 5px 10px;
    background-color: #d9d9d9;

    border-radius: 10px;

    font-size: 50px;

    &.add_btn:hover {
      border: 1px solid #409eff;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }

  // 设置人物初始属性
  #dialog_list {
    display: inline-block;

    li {
      list-style-type: none;
      margin: 20px 20px;

      label {
        font-size: 13px;
      }

      input {
        width: 220px;
        height: 35px;

        border-radius: 10px;
      }
    }
  }
}
</style>