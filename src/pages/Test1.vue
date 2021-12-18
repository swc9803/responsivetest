<template>
  <div class="wrapper">
    <img class="item" src="@/assets/pizza.png">
    <img class="item" src="@/assets/pizza.png">
    <img class="item" src="@/assets/pizza.png">
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  setup () {
    onMounted(() => {
      gsap.to('.item', { xPercent: -200, duration: 2, ease: 'none', repeat: -1 })
    })
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  white-space: nowrap;
  padding: 0px;
  transform: rotate( 45deg );
  .item {
    width: 100%;
    display: inline-block;
  }
}

</style>
