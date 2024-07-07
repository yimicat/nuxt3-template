<template>
  <h1 class="change-color text-center">
    {{ appConfig.title }}
  </h1>
</template>
<script setup lang="ts">
const appConfig = useAppConfig()
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
