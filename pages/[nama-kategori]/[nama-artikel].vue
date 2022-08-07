<script setup>

const route = useRoute()
const daftarSemuaArtikel = await queryContent(`/${route.params.namakategori}`)
    .only(['_path', 'title','subcategory', '_partial'])
    .where({_partial: false})
    .find()

//TODO: query semua konten python
//TODO: bedakan mode yang ditampilkan antara latihan atau artikel
//TODO: query soal dan solusi secara terpisah
//TODO: experiment running javascript on the browser
//TODO: figure out testing

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
                <ul class="menu border-r-2 border-slate-700 p-4 overflow-y-auto w-64 text-base-content">
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

/* cyan 500 */
.router-link-exact-active {
    color: #0ea5e9; 
    text-decoration: underline;
    text-underline-offset: 4px;
}

</style>