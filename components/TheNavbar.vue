<template>
    <header class="header">
        <div class="nav">
            <NuxtLink to="/" class="navbar__logo">
                <img src="~/assets/image/logo.png" alt="logo" />
            </NuxtLink>
            <nav class="navbar__menu">
                <NuxtLink to="/roadmap" class="navbar__menu-item"
                    >Roadmap</NuxtLink
                >
                <NuxtLink to="/kursus" class="navbar__menu-item"
                    >Daftar Kelas</NuxtLink
                >
            </nav>
        </div>
        <div class="buttons">
            <NuxtLink to="/login">
                <button class="navbar__login">LOGIN</button>
            </NuxtLink>
            <NuxtLink to="/register">
                <button class="navbar__register">REGISTER</button>
            </NuxtLink>
        </div>
    </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
    background-color: $n900;
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 1rem;
    .nav {
        display: flex;
        align-items: center;
        height: 100%;
        .navbar__logo {
            margin-right: 2rem;
            display: flex;
            align-items: center;
            img {
                width: 150px;
            }
        }
        .navbar__menu {
            display: flex;
            align-content: center;
            .navbar__menu-item {
                margin: auto .5rem;
                @include link;
            }
        }
    }
    .buttons {
        .navbar__login {
            @include button;
            @include button-sm;
            @include button-outline;
            @include body-text-sm;
        }
        .navbar__register {
            @include button;
            @include button-sm;
            @include button-full;
            @include body-text-sm;
            color: #000;
        }
    }
}
</style>