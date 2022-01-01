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
  background: #868686;
}
.myworks {
  background: #4e4e4e;
}
.about {
  background: #7e7e7e;
}
</style>
