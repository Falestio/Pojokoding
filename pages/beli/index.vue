<template>
    <div>
        <div class="min-h-screen">
            <!-- * CARDS -->
            <div class="flex flex-col gap-6 max-w-[800px] mx-auto mt-8">
                <div class="p-4 rounded flex flex-col gap-4 bg-base-300">
                    <h1 class="text-5xl">Kuasai Javascript</h1>
                    <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga dignissimos eligendi iusto quia unde magni culpa nihil voluptas sed.</p>
                    <ul class="flex flex-col gap-4">
                        <li class="text-xl font-bold">Javascript dasar</li>
                        <li class="text-xl font-bold">Functional Programming dalam Javascript</li>
                        <li class="text-xl font-bold">Object Oriented Programming dalam Javascript</li>
                    </ul>
                    <div class="flex justify-between">
                        <p class="text-2xl text-green-400 font-bold">Rp.100k untuk Akses Selamanya</p>
                        <NuxtLink class="btn btn-primary w-48 font-bold" to="/beli/checkout">Beli</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>