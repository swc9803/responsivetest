<template>
  <div class="text_box">
    <span class="text"></span><span class="blink">|</span>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      const content = '안녕하세요\n제 이름은 성우 입니다'
      const text = document.querySelector('.text')
      let i = 0
      function typing () {
        const txt = content[i++]
        text.innerHTML += txt === '\n' ? '<br/>' : txt
        if (i > content.length) {
          text.textContent = ''
          i = 0
        }
      }
      // settimeout
      setInterval(typing, 120)
    })
  }
}
</script>

<style lang="scss" scoped>
.text_box{
  font-size: 2rem;
  text-align: center;
}

.blink {
  animation: blink 0.5s infinite;
  font-size: 2.5rem;
}

@keyframes blink {
  to {
    opacity: 0;
  }
}
</style>
