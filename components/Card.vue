<template>
  <div>
    <div class="first">
      <div class="second">hi</div>
      <div class="third">hello</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.first {
  .second {
    color: green;
    font-family: $font-mono;
  }
  .third {
      color: blue;
      font-family: $font-base;
  }
}
</style>