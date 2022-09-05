<script setup lang="ts">
import { useThemeStore } from './store/theme';

const themeStore = useThemeStore()
let theme = computed(() => themeStore.currentTheme)

</script>

<template>
    <div :data-theme="theme">
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>