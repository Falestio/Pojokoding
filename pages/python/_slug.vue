<template>
    <div class="content-container">
        <Sidebar />
        <article class="content">
            <nuxt-content :document="course" />
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfwYjig9aaLZUVF0eqR--PCV3LAZWkG3O2kEis8-uIkrILbbA/viewform?embedded=true"
                width="660"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                >Loading…</iframe
            >
        </article>
    </div>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
    mounted() {
        Prism.highlightAll()
    },

    async asyncData({ $content, params }) {
        const course = await $content(`dasar-python/${params.slug}`).fetch()
        return { course }
    },
}
</script>

<style lang="scss" scoped>
.content {
    max-width: 700px;
    margin: 0 auto;
    iframe {
      width: 100%;
      margin: 0;
      padding: 0;
      position: relative;
      left: -30px;
      height: 100vh;
    }
}

.content-container {
  padding: 0 1rem;
}
</style>