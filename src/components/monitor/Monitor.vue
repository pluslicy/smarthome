<template>
  <div class="monitor">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="#/monitor/temperature" target="_self">温度</a></li>
      <li><a href="#/monitor/humidity" target="_self">湿度</a></li>
      <li><a href="" target="_self">二氧化碳</a></li>
      <li><a href="" target="_self">光照强度</a></li>
      <li><a href="#" target="_self">返回</a></li>

    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        msg : "环境监测模块"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }
</style>
