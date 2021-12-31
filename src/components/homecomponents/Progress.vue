<template>
  <svg class="progress"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 293 481">
    <g filter="url(#progress_d_117_63)">
      <g class="progressbox">
        <path class="line2" fill="#3E4043" d="M47 83.3c.5-1-.3-2.3-1.5-2.3h-23c-1.2 0-2 1.2-1.5 2.3l1.8 3a50 50 0 0 1 6.6 18.7l.1.5c.3 2.3.5 4.7.5 7V179l-1.1 16a50 50 0 0 1-7 22.2l-.9 1.5c-.5 1 .3 2.3 1.5 2.3h23c1.2 0 2-1.2 1.5-2.3l-.9-1.5a50 50 0 0 1-7-22.1L38 179v-66.4c0-2.4.2-4.8.5-7.1v-.5a50 50 0 0 1 6.7-18.7l1.8-3Z"/>
        <path class="line1" fill="#3E4043" d="M47 255.3c.5-1-.3-2.3-1.5-2.3h-23c-1.2 0-2 1.2-1.5 2.3l1.7 3a50 50 0 0 1 6.7 18.6v.4c.4 2.3.6 4.7.6 7v66l-1.1 15.8a50 50 0 0 1-7.1 22.3l-.8 1.3c-.5 1 .3 2.3 1.5 2.3h23c1.2 0 2-1.2 1.5-2.3l-.8-1.3a50 50 0 0 1-7-22.3L38 350.3v-66c0-2.3.2-4.7.5-7v-.4a50 50 0 0 1 6.8-18.7l1.7-2.9Z"/>
        <g class="group1">
          <path class="active1" fill="#FFFB9D" stroke="#FFD1D1" d="M63.5 65a29.5 29.5 0 1 1-59 0 29.5 29.5 0 0 1 59 0Z"/>
          <circle class="outside1" cx="34" cy="65" r="22.5" fill="#3E4043" stroke="#FFD1D1"/>
          <circle class="inside1" @click="goToFirst" cx="33.9" cy="64.9" r="16.9" fill="#43E8FF"/>
        </g>
        <g class="group2">
          <circle class="active2" cx="34" cy="237" r="29.5" fill="#FFFB9D" stroke="#FFD1D1"/>
          <circle class="outside2" cx="34" cy="237" r="22.5" fill="#3E4043" stroke="#FFD1D1"/>
          <circle class="inside2" @click="goToSecond" cx="33.9" cy="236.9" r="16.9" fill="#5DFF24"/>
        </g>
        <g class="group3">
          <circle class="active3" cx="34" cy="408" r="29.5" fill="#FFFB9D" stroke="#FFD1D1"/>
          <circle class="outside3" cx="34" cy="408" r="22.5" fill="#3E4043" stroke="#FFD1D1"/>
          <circle class="inside3" @click="goToThird" cx="33.9" cy="407.9" r="16.9" fill="#FDFFA5"/>
        </g>
      </g>
      <g class="boxes">
        <g class="box1">
          <g class="rectangle1">
            <path fill="#fff" d="M101 10a10 10 0 0 1 10-10h167.5a10 10 0 0 1 10 10v110a10 10 0 0 1-10 10H111.1a10 10 0 0 1-10-10V76L90 64.6l11-10.6V10Z"/>
            <path stroke="#000" stroke-opacity=".2" d="m101.4 54.3.2-.2V10c0-5.2 4.2-9.5 9.5-9.5h167.4c5.2 0 9.5 4.3 9.5 9.5v110c0 5.2-4.3 9.5-9.5 9.5H111.1a9.5 9.5 0 0 1-9.5-9.5V75.9l-.2-.2-10.7-11.2 10.7-10.2Z"/>
          </g>
          <text xml:space="preserve" class="boxText1" fill="#000" font-family="BM JUA_TTF" font-size="30" letter-spacing="0em" style="white-space:pre"><tspan x="118" y="71.5">Introduction</tspan></text>
        </g>
        <g class="box2">
          <g class="rectangle2">
            <path fill="#fff" d="M101 182a10 10 0 0 1 10-10h167.5a10 10 0 0 1 10 10v110a10 10 0 0 1-10 10H111.1a10 10 0 0 1-10-10v-44L90 236.6l11-10.6V182Z"/>
            <path stroke="#000" stroke-opacity=".2" d="m101.4 226.3.2-.2V182c0-5.2 4.2-9.5 9.5-9.5h167.4c5.2 0 9.5 4.3 9.5 9.5v110c0 5.2-4.3 9.5-9.5 9.5H111.1a9.5 9.5 0 0 1-9.5-9.5v-44.1l-.2-.2-10.7-11.2 10.7-10.2Z"/>
          </g>
          <text xml:space="preserve" class="boxText2" fill="#000" font-family="BM JUA_TTF" font-size="30" letter-spacing="0em" style="white-space:pre"><tspan x="133" y="243.5">My Works</tspan></text>
        </g>
        <g class="box3">
          <g class="rectangle3">
            <path fill="#fff" d="M101 353a10 10 0 0 1 10-10h167.5a10 10 0 0 1 10 10v110a10 10 0 0 1-10 10H111.1a10 10 0 0 1-10-10v-44L90 407.6l11-10.6V353Z"/>
            <path stroke="#000" stroke-opacity=".2" d="m101.4 397.3.2-.2V353c0-5.2 4.2-9.5 9.5-9.5h167.4c5.2 0 9.5 4.3 9.5 9.5v110c0 5.2-4.3 9.5-9.5 9.5H111.1a9.5 9.5 0 0 1-9.5-9.5v-44.1l-.2-.2-10.7-11.2 10.7-10.2Z"/>
          </g>
          <text xml:space="preserve" class="boxText3" fill="#000" font-family="BM JUA_TTF" font-size="30" letter-spacing="0em" style="white-space:pre"><tspan x="149" y="414.5">About</tspan></text>
        </g>
      </g>
    </g>
    <defs>
      <filter id="progress_d_117_63" width="292.5" height="481" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_117_63"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_117_63" result="shape"/>
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
    // Progress 애니메이션
    onMounted(() => {
      const progressAni1 = gsap.to('.inside1', {
        fill: '#00B1E9',
        duration: 0.3,
        ease: 'none'
      })
      const progressBoxAni1 = gsap.from('.box1', {
        xPercent: -10,
        opacity: 0,
        duration: 0.5
      })
      progressAni1.pause()
      progressBoxAni1.pause()
      document.querySelector('.inside1').addEventListener('mouseenter', function () {
        progressAni1.play()
        progressBoxAni1.play()
      })
      document.querySelector('.inside1').addEventListener('mouseleave', function () {
        progressAni1.reverse()
        progressBoxAni1.reverse()
      })

      const progressAni2 = gsap.to('.inside2', {
        fill: '#0DA700',
        duration: 0.3,
        ease: 'none'
      })
      const progressBoxAni2 = gsap.from('.box2', {
        xPercent: -10,
        opacity: 0,
        duration: 0.5
      })
      progressAni2.pause()
      progressBoxAni2.pause()
      document.querySelector('.inside2').addEventListener('mouseenter', function () {
        progressAni2.play()
        progressBoxAni2.play()
      })
      document.querySelector('.inside2').addEventListener('mouseleave', function () {
        progressAni2.reverse()
        progressBoxAni2.reverse()
      })

      const progressAni3 = gsap.to('.inside3', {
        fill: '#D6DB00',
        duration: 0.3,
        ease: 'none'
      })
      const progressBoxAni3 = gsap.from('.box3', {
        xPercent: -10,
        opacity: 0,
        duration: 0.5
      })
      progressAni3.pause()
      progressBoxAni3.pause()
      document.querySelector('.inside3').addEventListener('mouseenter', function () {
        progressAni3.play()
        progressBoxAni3.play()
      })
      document.querySelector('.inside3').addEventListener('mouseleave', function () {
        progressAni3.reverse()
        progressBoxAni3.reverse()
      })
      // Progress 스크롤
      const moveProgress = gsap.to('.progress', {
        xPercent: 30,
        paused: true,
        duration: 0.3
      }).progress(1)
      ScrollTrigger.create({
        start: '10%',
        end: '100%',
        onUpdate: (self) => {
          self.direction === -1 ? moveProgress.play() : moveProgress.reverse()
        }
      })
    })

    // Progress 해당 영역으로 이동
    const goToFirst = () => {
      scrollTo({ top: 0, behavior: 'smooth' })
    }
    const goToSecond = () => {
      const menuHeight = document.querySelector('.navbar').offsetHeight
      const myworksLocation = document.querySelector('.myworks').offsetTop
      scrollTo({ top: myworksLocation - menuHeight, behavior: 'smooth' })
    }
    const goToThird = () => {
      const menuHeight = document.querySelector('.navbar').offsetHeight
      const aboutLocation = document.querySelector('.about').offsetTop
      scrollTo({ top: aboutLocation - menuHeight, behavior: 'smooth' })
    }
    return {
      goToFirst, goToSecond, goToThird
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  position: fixed;
  height: 40%;
  opacity: 0.9;
  transform: translate(0, -50%);
  top: 50%;
  left: 4%;
  z-index: 5;
}
.inside1,
.inside2,
.inside3 {
  cursor: pointer;
}
.active1,
.active2,
.active3 {
  opacity: 0;
}
@media screen and (max-width: 768px) {
  .progress {
    display: none;
  }
}
</style>
