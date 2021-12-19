<template>
  <svg class="gotop" @click="goTop"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 108 108">
    <g filter="url(#goTop_d_14_9)">
      <circle id="topCircle" cx="52" cy="50" r="50" fill="#666"/>
    </g>
    <path id="topArrow" fill="#95AD4E" d="M53.8 26.2c-1-1-2.6-1-3.6 0l-15.9 16a2.5 2.5 0 0 0 3.6 3.5L52 31.5l14.1 14.2a2.5 2.5 0 0 0 3.6-3.6l-16-15.9Zm.7 45.8V28h-5v44h5Z"/>
    <defs>
      <filter id="goTop_d_14_9" width="108" height="108" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="2" dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_14_9"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_14_9" result="shape"/>
      </filter>
    </defs>
  </svg>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const goTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    onMounted(() => {
      const topHover = gsap.to('#topCircle', {
        fill: '#95AD4E',
        duration: 0.2,
        ease: 'none'
      })
      const topHoverRe = gsap.to('#topArrow', {
        fill: '#FFFFFF',
        duration: 0.2,
        ease: 'none'
      })
      topHover.pause()
      topHoverRe.pause()
      document.querySelector('.gotop').addEventListener('mouseenter', function () {
        topHover.play()
        topHoverRe.play()
      })
      document.querySelector('.gotop').addEventListener('mouseleave', function () {
        topHover.reverse()
        topHoverRe.reverse()
      })

      const showGoTop = gsap.to('.gotop', {
        opacity: 0,
        xPercent: 40,
        cursor: 'default',
        paused: true,
        duration: 0.3,
        ease: 'none'
      }).progress(1)

      ScrollTrigger.create({
        start: '20%',
        onUpdate: (self) => {
          self.direction === -1 ? showGoTop.play() : showGoTop.reverse()
        }
      })
    })

    return {
      goTop
    }
  }
}
</script>

<style lang="scss" scoped>
.gotop {
  cursor: pointer;
  width: 40px;
  position: fixed;
  right: 4vw;
  bottom: 6vh;
}
</style>
