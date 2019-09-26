<template>
  <div id="app">
    <router-view/>
    <modals-container />
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
