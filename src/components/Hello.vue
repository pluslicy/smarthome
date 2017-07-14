<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2><a href="#/control">家电控制</a></h2>

    <h2><a href="#/monitor">环境监测</a></h2>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到杰普智能家居系统'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

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
