<template>
  <div id="createChallenge">
      <div id="backgroundWall" >
        <!-- 上传图片 -->
        <el-upload 
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text" style="left: 80px;">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      </div>

      <!-- 表单 -->
      <div id="detail">
        <span>主题</span>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item >
            <el-input v-model="form.title" style="width: 200px;" placeholder="如：持续早起打卡30天（20字以内）"></el-input>
          </el-form-item >

          <!-- 挑战介绍 -->
          <span>挑战介绍</span>
          <el-form-item>
            <el-input type="textarea" v-model="form.introduction" style="width: 400px" placeholder="如：学习新思想，争做新青年，欢迎来到GuaiGuai的世界（200字以内）"></el-input>
          </el-form-item>

          <!-- 挑战规则 -->
          <span>挑战规则</span>
          <el-form-item>
            <el-input type="textarea" v-model="form.rule" style="width: 400px"  placeholder="如：1.每日早上在6：00-7：00的时间段起床，并穿戴整齐进行自拍，自拍需附带有时间水印；
            2.在GuaiGuai上签到打卡，附带有时间的签到截图；"></el-input>
          </el-form-item>

          <!-- 挑战标签 -->
          <span>挑战标签</span>
          <el-form-item >
            <el-input v-model="form.label" style="width: 200px" placeholder="如：早起"></el-input>
          </el-form-item>

          <!-- 挑战日期和时间 -->
          <!-- <span>开始时间</span>
          <div class="block">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right">
            </el-date-picker>
          </div> -->

          <!-- 挑战开始时间 -->
          <div class="block">
            <span class="demonstration">开始时间</span>
            <el-date-picker
              v-model="form.start_time"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>

          <!-- 挑战结束时间 -->
          <div class="block">
            <span class="demonstration">结束时间</span>
            <el-date-picker
              v-model="form.end_time"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <!-- 挑战限制 -->
          <span>挑战限制</span>
          <el-form-item >
            <el-input v-model="form.restrict" style="width: 200px" placeholder="如：等级10以上的玩家" ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="submit" @click="onSubmit" style="width: 100px; height: 28px;">立即创建</el-button>
            <el-button style="height: 28px;width: 100px;">取消</el-button>
          </el-form-item>

        </el-form>

      </div>

      <div id="descript">
    
      </div>
  </div>

</template>


<script>
export default {
  data() {
    return {
      // pickerOptions: {
      //   shortcuts: [{
      //     text: '最近一周',
      //     onClick(picker) {
      //       const end = new Date();
      //       const start = new Date();
      //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      //       picker.$emit('pick', [start, end]);
      //     }
      //   }, {
      //     text: '最近一个月',
      //     onClick(picker) {
      //       const end = new Date();
      //       const start = new Date();
      //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      //       picker.$emit('pick', [start, end]);
      //     }
      //   }, {
      //     text: '最近三个月',
      //     onClick(picker) {
      //       const end = new Date();
      //       const start = new Date();
      //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      //       picker.$emit('pick', [start, end]);
      //     }
      //   }]
      // },

      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      
      // 已上传图片 列表
      fileList: [],

      user_id:'1',

      form: {
        // 用户id
        user_id: 66,
        // 创建挑战时间
        issue_date: '2023-05-10 21:40:13',
        // 挑战主题
        title: '1',
        // 挑战介绍
        introduction: '1',
        // 挑战规则
        rule: '2',
        // 挑战标签
        label: '3',
        // 挑战开始时间
        start_date: '2023-05-10',
        // 挑战结束时间
        end_date: '2023-05-12',
        // 挑战限制
        restrict: '7',
        // 奖励金额
        reward:'200',
        // 参与人数
        participants_number: '5'
      }
    }
  },
  methods: {

    // 上传图片列表 功能函数
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },

    // 表单提交
    onSubmit() {
      this.$confirm(`是否要发起挑战：${this.form.subject}.`, '确定', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        this.$API.addChallenge(this.form).then((res) => {
          console.log(this.form)
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
        
        this.$message({
          type: 'success',
          message: '挑战将进行审核！'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消不成功！'
        });          
      });
    }
  },
  computed:{
    // // 获取用户id
    // user_id(){
    //   return this.$store.state.user_id
    // }，
    
  },


}
</script>

<style lang="less" scoped>
*{
margin: 0;
padding: 0;
}
/deep/ .el-upload-dragger{
 height: 90px !important;
 width: 500px;

 
}
/deep/ .el-input__inner {
  height: 27px;
  width: 300px;
  left: 98px;
  top: 0px;

  

}

#createChallenge{
width: 1120px;
height: 540px;
background-color: rgba(216, 220, 250, 0.5);
position: relative;

float: left;

#backgroundWall{
  width: 300px;
  height: 90px;
  margin: 10px 20px;


  button{
    width: 70px;
    height: 35px;
  }
}
#detail span {
  font-weight: 600;
 
}
#detail{
  margin-top: 20px;
  margin-left: 20px;
  width: 600px;
  height: 430px;
}

#descript{
  width: 520px;
  height: 100%;

  position: absolute;
  right: 0px;
  top: 0px;
}
}

</style>