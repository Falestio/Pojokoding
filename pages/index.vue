<script setup>
// get all courses
const { data: courses } = await useFetch(
    "https://diimhezu.apicdn.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22courses%22%5D%7B%0A%20%20title%2C%20description%2C%20slug%2C%20_id%0A%7D"
);

const user = useCurrentUser();
</script>

<template>
    <div>
        <div class="con min-h-screen flex flex-col md:pt-24">
            <h1 class="text-5xl font-bold text-center mt-8">Tempat belajar Javascript paling oke 👍🏻</h1>

            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-12">
                <template v-for="course in courses.result" :key="course._id">
                    <NuxtLink :to="`/${course.slug.current}/intro`" class="block hover:translate-y-1">
                        <div class="p-4 bg-base-200 rounded">
                            <h2 class="text-4xl mb-2">{{ course.title }}</h2>

                            <p class="text lg">{{ course.description }}</p>
                        </div>
                    </NuxtLink>
                </template>
            </div>

            <pre>
                {{courses}}
            </pre>
        </div>
    </div>
</template>