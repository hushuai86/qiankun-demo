<template>
  <div id="app">
    <header>
      <router-link to="micro/qiankun-sub">qiankun-sub</router-link>
      <router-link to="/about">about</router-link>
    </header>
    <div id="appContainer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#app{
  height: 100vh;
  text-align: center;
  position: relative;
}
header>a{
  margin: 0 20px;
}
.appContainer{
  background: #ccc;
  padding: 20px;
}
</style>
