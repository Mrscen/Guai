<template>
  <div id="NftRole">
    <ModelView3D/>
    <button>发行</button>
  </div>
</template>

<script>
import ModelView3D from "../ModelView3D.vue";
export default {
  name: "NFtRole",
  components:{
    ModelView3D
  },
  mounted(){
    this.$API.getModel().then((res) => {
      console.log('获取成功', res)
    })
  }
};
</script>




<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
#NftRole {
  width: 300px;
  height: 540px;

  position: relative;

  display: inline-block;

  button {
    position: absolute;
    bottom: 20px;
    left: 110px;

    width: 92px;
    height: 35px;

    background-color: white;
    border-radius: 5px;
  }
}
</style>