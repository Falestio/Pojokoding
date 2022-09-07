<script setup>
definePageMeta({
    layout: "plain",
});
</script>

<template>
    <div>
        <div class="con min-h-screen flex flex-col md:pt-24">
            <h1 class="text-5xl font-bold text-center mt-8">Pojokoding</h1>
            <h2 class="text-3xl font-bold text-center mt-8">Tempat belajar Javascript paling oke 👍🏻</h2>
            <div class="flex gap-3 justify-center my-8">
              <button class="btn btn-outline">Login</button>
              <button class="btn btn-outline">Daftar</button>
              <button class="btn btn-outline">Beli</button>
            </div>
            
            <div class="flex flex-col gap-6">
                <div class="card flex max-w-xl flex-col gap-4 border-2 mx-auto">
                    <div class="card-body">
                        <p class="text-xl font-bold">Pemula</p>
                        <h2 class="text-4xl font-bold">Dasar-Dasar Javascript</h2>
                        <div class="flex gap-3">
                          <div class="badge badge-lg">31 Artikel</div>
                          <div class="badge badge-lg">42 Latihan</div>
                          <div class="badge badge-lg">7 Proyek</div>
                        </div>
                        <p class="text-lg">
                            Lorem ipsum dolor sit ame dolore ratione! Sequi molestias itaque distinctio similique asperiores aspernatur
                            ipsum soluta esse!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>