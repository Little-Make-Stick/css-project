<template>
  <div class="app-contain">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
html{
  width: 100%;
  height: 100%;
}
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  width: 100%;
  height: 100%;
}

.app-contain{
  height: 100vh;
  width: 100%;
}
</style>
