<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <main class="grid min-h-full place-items-center bg-white px-6 py-24 lg:px-8 sm:py-32">
    <div class="text-center">
      <p class="text-3xl text-indigo-600 font-semibold">{{ error && error.statusCode }}</p>
      <h1 class="mt-4 text-3xl text-gray-900 font-bold tracking-tight sm:text-5xl">
        {{ error && error.statusMessage }}
      </h1>
      <p class="mt-6 text-base text-gray-600 leading-7">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink class="text-sm text-gray-900 font-semibold" to="/">
          Go back home<span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
