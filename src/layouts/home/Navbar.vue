<template>
  <nav>
    Navbar
  </nav>
</template>

<script>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    onMounted(() => {
      // 위로 스크롤 시 navbar 위로
      const showAnim = gsap.from('nav', {
        yPercent: -10,
        opacity: 0,
        paused: true,
        duration: 0.5
      }).progress(1)

      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  padding: 40px 0;
  display: flex;
  background: beige;
}
</style>
