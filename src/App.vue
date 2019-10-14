<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
  import '@static/reset.css';
  export default {
    name: 'App',
    mounted() {

    }
  }
</script>

<style>
  html,body,#app{
    height: 100%;
  }
  body{
    margin: 0;
    padding: 0;
  }
</style>
