<template>
<!-- cont 지워도 되나 -->
  <div class="cont">
    <Navbar class="navbar"/>
    <div class="wrapper">
      <div class="container">
        <HomeView class="content"/>
      </div>
      <Footer class="footer" />
    </div>
  </div>
</template>

<script>
import HomeView from './View'
import Navbar from './Navbar'
import Footer from './Footer'
export default {
  name: 'HomeLayout',
  components: {
    HomeView, Navbar, Footer
  }
}
</script>

<style lang="scss" scoped>
.cont {
  margin: 0;
  padding: 0;
  height: 100%;
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    .container {
      padding-top: 110px;
      flex: 1;
      background: #333;
    }
    .footer {
      padding: 40px 0;
      background: beige;
      color: #333;
    }
  }
}
</style>
