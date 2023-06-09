<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style scoped>
#app{
  /* 固定尺寸、位置 */
  width: 1200px;
  height: 600px;
  margin: 0 auto;

  background-color: rgba(216, 220, 250, 0.3);

  /* 设定边框 */
  border: none;
}
</style>
