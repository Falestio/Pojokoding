<script setup>
defineProps({
    currentArticlePath: String,
    allArticleWithTheSameCategory: Array,
});
</script>

<template>
    <div>
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col p-10">
                <article class="article-container">
                    <ContentDoc class="article pb-12 pt-8" :path="currentArticlePath"></ContentDoc>
                    <ArticleComment></ArticleComment>
                </article>
                <!-- <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> -->
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu border-r-2 border-slate-700 p-4 overflow-y-auto w-64 text-base-content">

                    <li v-for="artikel in allArticleWithTheSameCategory" :key="artikel.title">
                        <template v-if="!artikel.subcategory">
                            <NuxtLink :to="artikel._path">{{ artikel.title }}</NuxtLink>
                        </template>
                        <template v-else>
                            <span class="font-bold text-xl">{{ artikel.title }}</span>
                        </template>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>