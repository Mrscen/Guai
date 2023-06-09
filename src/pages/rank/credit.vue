<template>
    <div id="CreditList">
        <el-tooltip class="item" effect="light" content="Bottom Center 提示文字" placement="bottom">
            <h1>荣誉榜</h1>
        </el-tooltip>

        <el-table
        class="list_item"
        :data="tableData"
        style="width: 1050px"

        >

        <el-table-column
            prop="name"
            label="姓名"
            width="350px">
        </el-table-column>

        <el-table-column
            prop="date"
            label="日期"
            width="350px">
        </el-table-column>

        <el-table-column
            prop="credit"
            label="荣誉"
            width="350px">
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default{
    name:'CreditList',
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            credit: '249荣誉'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            credit: '249荣誉'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            credit: '249荣誉'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            credit: '249荣誉'
          }]
        }
      }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#CreditList{
    width: 1120px;
    height: 540px;

    float: left;

    h1{
        text-align: center;
    }

    .list_item{
       margin: 35px 35px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }
}
</style>