<template>
  <nav>
    <ul class="menu">
      <svg class="symbol"
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 137 63">
        <path stroke="#95AD4E" stroke-linecap="round" stroke-width="3" d="M1.6 5.6v50c0 7.8 21.4 4.7 27.6 2.6M58.2 13.5C47.5 20 46.3 38.9 46.3 50.9c0 8.6 9.8 4.4 14.6 1.2 11.2-7.8 13.7-23.6 13-36-.2-5.3-15-4-18.4-4M100.3 4.3c-5.4 1-14.4 2.6-17.8 7.9C80.7 15 78.4 23.7 82 26c10.4 6.6 18.3-.5 19.5-11.2.3-2.5 0-15.5 0-11.9v34.3c0 5.5 1.5 13.7-3.9 16-3.6 1.7-7.8 1-11.8 1M122.6 16.1c-7 9.4-7.2 17.5-6.5 29 .3 5.2 11.6 2.7 13.1-.7 3-6.6 6.9-11.3 5.1-19-1.3-6.2-6.3-14.6-13-14.6"/>
      </svg>
      <li>
        <h4>HOME</h4>
      </li>
      <li>
        <h4>About Me</h4>
      </li>
      <li>
        <h4>BLOG</h4>
      </li>
      <li>
        <h4>CONTACT</h4>
      </li>
    </ul>
  </nav>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    onMounted(() => {
      // 위로 스크롤 시 navbar 위로
      const navUp = gsap.from('nav', {
        yPercent: -10,
        paused: true,
        duration: 0.5,
        background: '#3E4043',
        color: '#ffffff',
        ease: 'none'
      }).progress(1)
      const textUp = gsap.from('li', {
        yPercent: 16,
        paused: true,
        duration: 0.5,
        ease: 'none'
      }).progress(1)
      const symbolUp = gsap.from('.symbol', {
        scale: 0.9,
        yPercent: 10,
        paused: true,
        duration: 0.5,
        ease: 'none'
      }).progress(1)

      ScrollTrigger.create({
        start: 'top top',
        end: 'bottom',
        onUpdate: (self) => {
          self.direction === -1 ? navUp.play() : navUp.reverse()
          self.direction === -1 ? textUp.play() : textUp.reverse()
          self.direction === -1 ? symbolUp.play() : symbolUp.reverse()
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
  height: 10%;
  font-size: 1em;
 .menu {
    list-style: none;
    padding-left: 0;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    .symbol {
      cursor: pointer;
    }
    li {
      // width: 10%;
      padding: 4px;
      padding-top: 20px;
      display: inline-block;
      cursor: pointer;
      h4 {
        margin: 0;
      }
    }
  }
}
</style>
