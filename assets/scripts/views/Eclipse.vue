<template>
    <h1>{{ msg }}</h1>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Eclipse',
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
