<script setup>

const route = useRoute()
const daftarArtikel = await queryContent(`/${route.params.namakategori}`).find()

</script>

<template>
    <div>
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center p-4">
                <!-- Page content here -->
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
             
                <article class="article-container">
                    <ContentDoc class="article pb-12 pt-8"></ContentDoc>
                </article>
            </div> 
            <div class="drawer-side ">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu bg-gray-50 p-4 overflow-y-auto w-72 text-base-content">
                    <li>
                        <NuxtLink to="/" class="text-2xl font-bold">Pojokoding</NuxtLink>
                    </li>
                    
                    <li v-for="artikel in daftarArtikel" :key="artikel.title">
                        <NuxtLink :to="artikel._path">{{ artikel.title }}</NuxtLink>
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
</style>