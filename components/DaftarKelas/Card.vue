<template>
    <NuxtLink class="card" to="/">
        <div class="card__top">
            <img
                src="~/assets/image/html-thumb.png"
                alt="thumbnail"
                class="card__top-thumb"
            />
            <div class="card__top-heading">
                <h2 class="card__top-heading-title">Dasar HTML</h2>
                <div class="card__top-heading-info">
                    <span class="card__top-heading-info-item">12 Modul</span>
                    <span class="card__top-heading-info-item">24 Artikel</span>
                    <span class="card__top-heading-info-item">50 Latihan</span>
                </div>
            </div>
        </div>
        <div class="card__bottom">
            <p class="card__bottom-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, sunt culpa? Corporis est, perferendis enim repellat a
                molestiae esse quas cum quod doloribus rem! Eos ex possimus
                cupiditate odio accusantium.
            </p>
            <div class="card__bottom-info">
                <span class="card__bottom-info-item">30 jam</span>
            </div>
        </div>
    </NuxtLink>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card {
    @include card;
    @include card-hover-animation;
    .card__top {
        display: flex;
        margin-bottom: 1rem;

        .card__top-thumb {
            display: block;
            max-width: 4rem;
            margin-right: 1rem;
        }
        .card__top-heading {
            display: flex;
            flex-direction: column;
            .card__top-heading-title {
                margin-bottom: 0.5rem;
                @include heading-text-sm;
            }
            .card__top-heading-info {
                display: flex;
                .card__top-heading-info-item {
                    @include body-text-sm;
                    display: flex;
                    margin-right: .8rem;
                }
            }
        }
    }
    .card__bottom {
        .card__bottom-description {
            @include body-text-md;
            margin-bottom: 1rem;
        }
        .card__bottom-info {
            display: flex;
            .card__bottom-info-item {
                @include body-text-sm;
                display: flex;
            }
        }
    }
}
</style>