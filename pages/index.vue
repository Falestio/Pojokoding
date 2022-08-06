<script setup>

// daftar semua konten, termasuk info kategori, subcategory, dan artikel
const daftarKategori = await queryContent("/")
  .where({ info: true })
  .find();

</script>

<template>
  <div>
    <div class="con min-h-screen flex flex-col md:pt-24">
      <h1 class="text-5xl font-bold text-center mt-8">
        Selamat datang di Pojokoding! ingin belajar apa?
      </h1>

      <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-12">
        
        <template v-for="kategori in daftarKategori" :key="kategori._id">
          <NuxtLink :to="kategori.artikelPertamaPath">
            <div class=" p-4 border-2 border-gray-100 rounded ">
              <h2 class="text-4xl mb-2">{{kategori.title}}</h2>

              <div class="btn btn-sm mr-2">
                {{kategori.totalArtikel}} Artikel
              </div>

              <div class="btn btn-sm">
                {{kategori.totalProyek}} Proyek
              </div>
  
              <p class="text-xl mt-2">
                {{kategori.description}}
              </p>
            </div>
          </NuxtLink>
        </template>
        
      </div>
    </div>
  </div>
</template>