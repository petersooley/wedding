<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello World!!!!',
      };
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  $color: #42b983;
  .hello {
    .title {
      color: $color;
      height: 10px;
    }
  }
</style>
