<template>
    <section class="welcome" id="welcome">
        <div class="welcome__container">
            <h1 class="welcome__title">Selamat datang di Pojokoding Beta</h1>
            <p class="welcome__text">
                Silahkan coba modul yang sudah ada berikut, jangan lupa
                feedbacknya ya! 😄
            </p>
            <NuxtLink to="/python/for" class="welcome__button"> Python: For Loop </NuxtLink>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.welcome {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-items: center;
    align-items: center;
    .welcome__container {
        margin: 0 auto;
        .welcome__title {
            @include heading-text-lg;
        }
        .welcome__text {
            @include body-text-lg;
        }
        .welcome__button {
            @include button;
            @include button-outline;
            @include button-lg;
            @include body-text-md;
            display: block;
        }
    }
}
</style>