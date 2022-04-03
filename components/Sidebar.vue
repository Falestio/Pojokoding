<template>
    <section class="sidebar" id="sidebar">
        <button class="toggle" @click="showSidebar = true">
            <i class="uil uil-bars"></i>
        </button>
        <div class="menu" :class="{'show-sidebar' :showSidebar}">
            <div class="menu__list">
                <NuxtLink to="/" class="menu__list-item">Home</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            showSidebar: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    .toggle {
        @include button;
        @include button-outline;
        @include button-sm;
        position: relative;
        top: 1.5rem;
        left: 1.5rem;
    }

    .menu {
        height: 100vh;
        width: 320px;
        background-color: $n600;
        position: fixed;
        top: 0;
        transition: .3s;
        left: -320px;
        .menu__list {
            .menu__list-item {
                @include link;
                font-size: $body-text-size-md;
                width: 100%;
                padding: 1rem 2rem;
                display: flex;
                align-items: center;
                justify-items: center;
            }
        }
        .menu__list-item:hover {
            background-color: $n900;
        }
    }

    .show-sidebar {
        left: 0 !important;
    }
}
</style>