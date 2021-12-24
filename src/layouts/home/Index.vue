<template>
  <Navbar class="navbar" />
  <HomeView class="content"/>
  <Footer class="footer" />
  <GoTop />
</template>

<script>
import HomeView from './View'
import Navbar from './Navbar'
import Footer from './Footer'
import GoTop from '@/components/GoTop'

export default {
  name: 'HomeLayout',
  components: {
    HomeView, Navbar, Footer, GoTop
  }
}
</script>

<style lang="scss">
$maincolor: #3E4043;
$contentcolor: #ffffff;

.navbar {
  color: $maincolor;
}
.content {
  // padding-top: 10%;
  background: $contentcolor;
}
.footer {
  padding: 40px 0 0 0;
  margin: -20px 0 0 0;
  background: $contentcolor;
  color: $maincolor;
  text-align: center;
}
hr {
  width: 80vw;
  height: 0.5px;
  background: $maincolor;
  margin-bottom: 40px;
}
</style>
