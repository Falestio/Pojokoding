<template>
    <div class="container">
        <div class="content-container">
            <div class="card">
                <img
                    src="~/assets/image/html-thumb.png"
                    alt="HTML logo"
                    class="card__thumb"
                />
                <h2 class="card__title">HTML Dasar menggunakan VSCode Extension</h2>
                <div class="card__info">
                    <span class="card__info-totalmodul">23 Modul</span>
                    <span class="card__info-totallatihan">64 Soal</span>
                    <span class="card__info-totaljam">12 Jam</span>
                </div>
            </div>
            <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                aliquid corporis non veniam voluptatum soluta ipsa illum
                veritatis blanditiis. Ratione neque fuga consectetur laudantium
                ad labore tempore veniam magnam blanditiis!
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    .content-container {
        display: grid;
        grid-template-columns: 35% 65%;
        column-gap: 1.2rem;
        margin: 2rem 0;
        .card {
            @include card;
            border: none;
            .card__thumb {
                margin-bottom: 1.5rem;
            }
            .card__title {
                @include heading-text-sm;
                margin-bottom: 1rem;
            }
            .card__info {
                @include body-text-sm;
            }
        }
        .description {
            @include body-text-sm;
        }
    }    
</style>