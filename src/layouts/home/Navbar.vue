<template>
  <nav>
    <ul class="menu">
      <li>
        <div class="menu-text">
          <h4>HOME</h4>
          <p>Start Here</p>
        </div>
      </li>
      <li>
        <div class="menu-text">
          <h4>About Me</h4>
          <p>about me</p>
        </div>
      </li>
      <li>
        <div class="menu-text">
          <h4>BLOG</h4>
          <p>My Thoughts</p>
        </div>
      </li>
      <li>
        <div class="menu-text">
          <h4>CONTACT</h4>
          <p>Get in Touch</p>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { onMounted } from 'vue'
import { gsap, Power4 } from 'gsap'
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
        background: '#304361',
        ease: Power4
      }).progress(1)
      const navTextUp = gsap.from('.menu-text', {
        yPercent: 10,
        paused: true,
        duration: 0.5,
        ease: Power4
      }).progress(1)

      ScrollTrigger.create({
        start: 'top top',
        end: 'bottom',
        onUpdate: (self) => {
          self.direction === -1 ? navUp.play() : navUp.reverse()
          self.direction === -1 ? navTextUp.play() : navTextUp.reverse()
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
 .menu {
    color: #95AD4E;
    list-style: none;
    padding-left: 0;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    li {
      padding: 4px;
      padding-top: 14px;
      .menu-text {
        display: inline-block;
        h4, p {
          margin: 0;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
