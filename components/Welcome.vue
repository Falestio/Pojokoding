<template>
    <section class="welcome" id="welcome">
        <div class="welcome__container">
            <h1 class="welcome__title">Selamat datang di Pojokoding</h1>
            <p class="welcome__text">
                Coba mengikuti Roadmap yang tersedia berikut
            </p>
            <p class="welcome__text">⬇️⬇️⬇️</p>
            <NuxtLink to="/python/for-loop" class="welcome__button"> Python: For Loop </NuxtLink>
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
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
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