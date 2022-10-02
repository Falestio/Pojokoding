<script setup>
import * as marked from "marked";
import * as _ from "lodash";

let route = useRoute();
let courseRoute = await _.camelCase(route.params.namakategori);

// Current Article
const query = `*[_type == "${courseRoute}" && slug.current == "${route.params.namaartikel}"]`;
const encodedQuery = encodeURIComponent(query);
const currentArticleUri = "https://diimhezu.apicdn.sanity.io/v2021-10-21/data/query/production?query=" + encodedQuery;
const { data: currentArticle } = await useFetch(currentArticleUri);
const currentArticleHTML = marked.parse(currentArticle.value.result[0].body);

// Sidebar content
const sidebarQuery = `*[_type == "${courseRoute}"] | order(orderRank asc) | {title,slug}`;
const encodedSidebarQuery = encodeURIComponent(sidebarQuery);
const sidebarUri = "https://diimhezu.apicdn.sanity.io/v2021-10-21/data/query/production?query=" + encodedSidebarQuery;
const { data: sidebarContent } = await useFetch(sidebarUri);
</script>

<template>
    <div>
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content py-10 px-16">
                <!-- <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">drawer<label> -->
                <pre>
                    {{currentArticle}}
                </pre>
                <article class="article" v-html="currentArticleHTML">
                </article>
                <hr class="my-10">
                <Comment></Comment>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-64 bg-base-300 text-base-content">
                    <!-- Sidebar content here -->
                    <li v-for="article in sidebarContent.result" :key="article.slug.current">
                        <NuxtLink :to="`/${route.params.namakategori}/${article.slug.current}`">{{ article.title }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
</style>