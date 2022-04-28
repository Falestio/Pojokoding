<template>
  <div class="container">
    <div class="daftar-kelas-card-container">
      <DaftarKelasCard/>
      <DaftarKelasCard/>
      <DaftarKelasCard/>
      <DaftarKelasCard/>
      <DaftarKelasCard/>
      <DaftarKelasCard/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .daftar-kelas-card-container {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
</style>