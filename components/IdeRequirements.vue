<script setup>

let checked = ref(true)

const mockData = [
    {
        desc: "user dapat melakukan hal ini",
        finished: true
    },
    {
        desc: "user dapat melakukan hal itu dengan baik dan benar tidak asal asalan",
        finished: false
    }
]

</script>


<template>
    <div class="w-full p-4 bg-slate-800 rounded">
        <h2 class="text-3xl">Syarat</h2>
        <ul class="flex flex-col">
            <li class="py-2 flex items-center" v-for="data in mockData" :key="data.desc">
                <!-- munculkan div absolute diatas checkbox sehingga tidak bisa di check -->
                <div class="relative">
                    <div class="absolute w-full h-full z-10"></div>
                    <input type="checkbox" v-model="data.finished"  class="checkbox checkbox-secondary mr-4" />
                </div>
                <p class="text-lg">{{data.desc}}</p>
            </li>
        </ul>
    </div>
</template>