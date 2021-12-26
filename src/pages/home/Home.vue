<template>
  <Homepage />
  <Aboutmepage style="background: beige"/>
  <Blogpage />
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

</style>
