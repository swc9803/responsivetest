<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'View'
}
</script>

<style lang="scss" scoped>
.cont {
  margin: 0;
  padding: 0;
  height: 100%;
  .wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    .container {
      padding-top: 110px;
      flex: 1;
    }
    .footer {
      padding: 40px 0;
      background: #333;
      color: #fff;
    }
  }
}
</style>
