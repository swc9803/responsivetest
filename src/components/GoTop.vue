<template>
  <svg class="gotop" @click="goTop"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 108 108">
    <g filter="url(#goTop_d_36_2)">
      <circle id="topCircle" cx="52" cy="50" r="50" fill="#fff" shape-rendering="crispEdges"/>
    </g>
    <path id="topLine" fill="#3E4043" d="M31 25c0-.6.4-1 1-1h40c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1H32a1 1 0 0 1-1-1v-3Z"/>
    <path id="topArrow" fill="#3E4043" d="M53.8 36.2c-1-1-2.6-1-3.6 0l-15.9 16a2.5 2.5 0 0 0 3.6 3.5L52 41.5l14.1 14.2a2.5 2.5 0 0 0 3.6-3.6l-16-15.9Zm.7 43.8V38h-5v42h5Z"/>
    <defs>
      <filter id="goTop_d_36_2" width="108" height="108" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="4" dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_36_2"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_36_2" result="shape"/>
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
    // 버튼 클릭 시 최상단 이동
    const goTop = () => {
      scrollTo({ top: 0, behavior: 'smooth' })
    }

    onMounted(() => {
      const topHover = gsap.to('#topCircle', {
        fill: '#3E4043',
        duration: 0.2,
        ease: 'none'
      })
      const topHoverRe = gsap.to('#topArrow, #topLine', {
        fill: '#ffffff',
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
        start: '10%',
        end: '100%',
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
  width: 50px;
  position: fixed;
  right: 3vw;
  bottom: 6vh;
}
</style>
