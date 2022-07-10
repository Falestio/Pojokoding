<script setup>
defineProps({
  prev: Object,
  next: Object
})
</script>

<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="prev._path"
      class="block btn font-bold"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="prev._path"
      class="block btn font-bold"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>