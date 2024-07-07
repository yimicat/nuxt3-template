<template>
  <div class="text-center">
    <NuxtImg src="/nuxt3.jpeg" />
    <div>
      <button class="bg-blue color-white" @click="setLocale('en')">en</button>
      <button bg-red color-yellow @click="setLocale('zh')">zh</button>
      <h1 class="group/text hover:color-yellow">
        <i class="i-tdesign-calm-1 inline-block group-hover/text:(i-tdesign-cat color-pink)"></i>
        {{ $t('welcome') }}
      </h1>
      <p>composables: {{ foo }}</p>
      <p>api: {{ data }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setLocale } = useI18n()
const foo = useFoo()
const data = ref({})

const getData = async () => {
  data.value = await $fetch('/api/test', {
    method: 'post',
    body: { test: 123 }
  })
}

getData()
</script>

<style lang="scss" scoped>
.change-color {
  animation: change 10s linear 0s infinite;
}

@keyframes change {
  0% {
    color: #f00;
  }

  25% {
    color: #fffb00;
  }

  50% {
    color: #2f0;
  }

  75% {
    color: #0059ff;
  }

  100% {
    color: #f00;
  }
}
</style>
