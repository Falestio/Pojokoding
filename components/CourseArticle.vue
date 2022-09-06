<script setup>
defineProps({
    currentArticlePath: String,
    allArticleWithTheSameCategory: Array,
});
</script>

<template>
    <div>
        <article class="article-container">
            <ContentDoc class="article pb-12 pt-8" :path="currentArticlePath"></ContentDoc>
        </article>

        <ul class="menu border-r-2 border-slate-700 p-4 overflow-y-auto w-64 text-base-content">
            <li>
                <NuxtLink to="/" class="text-2xl font-bold">Pojokoding</NuxtLink>
            </li>

            <li v-for="artikel in allArticleWithTheSameCategory" :key="artikel.title">
                <template v-if="!artikel.subcategory">
                    <NuxtLink :to="artikel._path">{{ artikel.title }}</NuxtLink>
                </template>
                <template v-else>
                    <span class="font-bold text-xl">{{ artikel.title }}</span>
                </template>
            </li>
        </ul>

        <aside>
            
        </aside>

    </div>
</template>