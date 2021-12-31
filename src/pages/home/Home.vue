<template>
  <Homepage class="home" />
  <Myworks class="myworks" />
  <Aboutmepage class="about" />
</template>

<script>
import Homepage from '@/components/homecomponents/Homepage'
import Myworks from '@/components/homecomponents/Myworks'
import Aboutmepage from '@/components/homecomponents/Aboutmepage'

export default {
  name: 'HomeLayout',
  components: {
    Homepage, Myworks, Aboutmepage
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #C5F8FF;
}
.myworks {
  background: #E3FFD9;
}
.about {
  background: #FFFCB9;
}
</style>
