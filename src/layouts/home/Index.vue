<template>
  <Navbar />
    <HomeView />
  <Footer />
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

</style>
