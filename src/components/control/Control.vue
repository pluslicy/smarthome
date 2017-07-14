<template>
  <div class="control">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="#/control/light" target="_self">射灯</a></li>
      <li><a href="#/control/fan" target="_self">风扇</a></li>
      <li><a href="" target="_self">窗帘</a></li>
      <li><a href="" target="_self">加湿器</a></li>
      <li><a href="#" target="_self">返回</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  module.exports = {
    name: '',
    data () {
      return {
        msg : "家电控制模块"
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
