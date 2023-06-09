<template>
    <div id="OverAllList">
        <el-tooltip class="item" effect="light" content="Bottom Center 提示文字" placement="bottom">
            <h1>总榜</h1>
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
                prop="grade"
                label="等级"
                width="350px">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default{
    name:'OverAllList',
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            grade: '50级'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            grade: '50级'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            grade: '50级'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            grade: '50级'
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
#OverAllList{
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