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

<style lang="scss" scoped>
$maincolor: #95AD4E;
$contentcolor: #444444;
$footercolor: #222222;

.navbar {
  color: $maincolor;
}
.content {
  padding-top: 110px;
  background: $contentcolor;
}
.footer {
  padding: 40px 0;
  margin-top: -20px;
  background: $footercolor;
  color: $maincolor;
}
</style>
