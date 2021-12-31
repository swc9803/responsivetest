<template>
  <Progress />
  <Navbar class="navbar" />
  <HomeView class="content"/>
  <Footer class="footer" />
  <GoTop />
</template>

<script>
import Progress from '@/components/homecomponents/Progress'
import HomeView from './View'
import Navbar from './Navbar'
import Footer from './Footer'
import GoTop from '@/components/GoTop'

export default {
  name: 'HomeLayout',
  components: {
    Progress, HomeView, Navbar, Footer, GoTop
  }
}
</script>

<style lang="scss">
@import '@/style/HomeColor';

</style>
