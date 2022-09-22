<script setup>
definePageMeta({
    middleware: ['protected']
})

const user = useCurrentUser() 
</script>

<template>
    <div class="min-h-screen">
        <h1 class="text-4xl">Dashboard</h1>

        <pre>
            {{user}}
        </pre>
    </div>
</template>