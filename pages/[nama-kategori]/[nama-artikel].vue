<script setup>

const route = useRoute()
const daftarSemuaArtikel = await queryContent(`/${route.params.namakategori}`)
    .only(['_path', 'title','subcategory', '_partial'])
    .where({_partial: false})
    .find()

</script>

<template>
    <div>
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col p-4 overflow-y-auto lg:px-12">
                <!-- <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> -->
                <article class="article-container ">
                    <ContentDoc class="article pb-12 pt-8"></ContentDoc>
                </article>
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu bg-gray-50 p-4 overflow-y-auto w-64 text-base-content">
                    <li>
                        <NuxtLink to="/" class="text-2xl font-bold">Pojokoding</NuxtLink>
                    </li>

                    <li v-for="artikel in daftarSemuaArtikel" :key="artikel.title">
                        <template v-if="!artikel.subcategory">
                            <NuxtLink :to="artikel._path" >{{ artikel.title }}</NuxtLink>
                        </template>
                        <template v-else>
                            <span class="font-bold text-xl">{{artikel.title}}</span>
                        </template>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.article-container {
    max-width: 744px;
}

.drawer-content {
    height: auto;
}

.router-link-exact-active {
    color: seagreen;
    text-decoration: underline;
    text-underline-offset: 4px;
}

</style>