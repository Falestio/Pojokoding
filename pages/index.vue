<script setup>
const artikel = await queryContent("/").find();
const artikelCSSPertama = await queryContent("/css").findOne();
const artikelHTMLPertama = await queryContent("/html").findOne();

const artikelHTML = await queryContent("/html").find();
const artikelCSS = await queryContent("/css").find();
</script>

<template>
  <div>
    <div class="con min-h-screen">
      <h1 class="text-5xl font-bold text-center mt-8">
        Selamat datang di Pojokoding! ingin belajar apa?
      </h1>

      <div class="grid grid-cols-2 gap-4 mt-8">
        <NuxtLink :to="artikelHTMLPertama._path">
          <div class="bg-gray-50 p-4 border-2 border-gray-100">
            <h2 class="text-4xl mb-2">HTML</h2>

            <div class="dropdown dropdown-hover">
              <label tabindex="0" class="btn btn-sm m-1">
                {{ artikelHTML.length }} Artikel
              </label>
              <ul
                tabindex="0"
                class="
                  dropdown-content
                  menu
                  p-2
                  shadow
                  bg-base-100
                  rounded-box
                  w-52
                "
              >
                <li v-for="artikel in artikelHTML" :key="artikel.title">
                  <NuxtLink :to="artikel._path">{{ artikel.title }}</NuxtLink>
                </li>
              </ul>
            </div>

            <div class="dropdown dropdown-hover">
              <label tabindex="0" class="btn btn-sm m-1">4 Proyek</label>
              <ul
                tabindex="0"
                class="
                  dropdown-content
                  menu
                  p-2
                  shadow
                  bg-base-100
                  rounded-box
                  w-52
                "
              >
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>

            <p class="text-xl mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident iusto, dicta minus qui esse aspernatur velit quas, omnis
              nesciunt neque dolorem illum sunt cupiditate obcaecati saepe
              minima dolorum architecto veritatis.
            </p>
          </div>
        </NuxtLink>

        <NuxtLink :to="artikelCSSPertama._path">
          <div class="bg-gray-50 p-4 border-2 border-gray-100">
            <h2 class="text-4xl mb-2">CSS</h2>

            <div class="dropdown dropdown-hover">
              <label tabindex="0" class="btn btn-sm m-1">
                {{ artikelCSS.length }} Artikel
              </label>
              <ul
                tabindex="0"
                class="
                  dropdown-content
                  menu
                  p-2
                  shadow
                  bg-base-100
                  rounded-box
                  w-52
                "
              >
              <li v-for="artikel in artikelCSS" :key="artikel.title">
                <NuxtLink :to="artikel._path">{{ artikel.title }}</NuxtLink>
              </li>
              </ul>
            </div>

            <div class="dropdown dropdown-hover">
              <label tabindex="0" class="btn btn-sm m-1">4 Proyek</label>
              <ul
                tabindex="0"
                class="
                  dropdown-content
                  menu
                  p-2
                  shadow
                  bg-base-100
                  rounded-box
                  w-52
                "
              >
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>

            <p class="text-xl mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident iusto, dicta minus qui esse aspernatur velit quas, omnis
              nesciunt neque dolorem illum sunt cupiditate obcaecati saepe
              minima dolorum architecto veritatis.
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>