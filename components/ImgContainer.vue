<template>
  <div>
      <img :src="ImgSource()" :alt="alt">
  </div>
</template>

<script>
export default {
    props: ['src', 'alt'],

    methods: {
        ImgSource(){
            return require(`~/assets/image/${this.src}`)
        },
    },
}
</script>

<style>

</style>