<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import '@static/reset.css';
  export default {
    name: 'App',
    mounted() {

    }
  }
  ;(function () {
    var src = '//cdn.bootcss.com/eruda/1.5.2/eruda.min.js';
    if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
  })();
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
