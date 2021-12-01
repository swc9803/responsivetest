<template>
  <div class="cont">
    <div class="wrapper">
      <div id="container">
        <h2>main content</h2>
      </div>
      <footer>
        footer
      </footer>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cont {
  margin:0;
  padding:0;
  height :100%;
}
.wrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
}
#container {
  flex: 1;
}
footer{
  padding: 40px 0;
  background: #333;
  color:#fff;
}
</style>>
