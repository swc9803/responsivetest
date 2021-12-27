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
@import '@/style/HomeColor';

</style>
