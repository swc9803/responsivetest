<template>
  <div class="container">
    <Homepage />
  </div>
  <div class="container" style="background: beige">
    <Aboutmepage />
  </div>
  <div class="container">
    <Blogpage />
  </div>
</template>

<script>
import Homepage from '@/components/homecomponents/Homepage'
import Aboutmepage from '@/components/homecomponents/Aboutmepage'
import Blogpage from '@/components/homecomponents/Blogpage'

export default {
  name: 'HomeLayout',
  components: {
    Homepage, Aboutmepage, Blogpage
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>
