<template>
<div>
<NuxtLink class="card-container" to="/roadmap/frontend">
        <div class="card">
            <div class="card__header">
                <div class="card__header-icon">
                    <i class="uil uil-brush-alt"></i>
                </div>
                <h2 class="card__header-title">Frontend Developer</h2>
                <span class="card__header-totaljam">160 jam</span>
            </div>
            <div class="card__desc">
                <p class="card__desc-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    sit fugiat ipsam, qui delectus corrupti quasi unde ratione
                    et dolorum quaerat. Asperiores, dignissimos commodi aliquam,
                    quia esse, blanditiis expedita dolorum eligendi placeat nam
                    porro repudiandae non odit. Molestiae, quaerat temporibus
                    deserunt reprehenderit consectetur perferendis aspernatur!
                    Sint, amet? Possimus vero recusandae quia perferendis culpa,
                    impedit, eius voluptatum odio quis veniam, est asperiores
                    obcaecati non voluptatibus itaque nostrum optio laboriosam!
                    Deleniti placeat, quod officiis nihil excepturi ut at
                    mollitia iure blanditiis expedita?
                </p>
            </div>
            <div class="card__info">
                <div class="card__info-totalkelas">6 Kelas</div>
                <div class="card__info-totalmodul">64 Modul</div>
                <div class="card__info-totallatihan">140 Latihan</div>
            </div>
        </div>
    </NuxtLink>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card-container {
    .card {
        @include card;
        transition: all .3s ease;
        &:hover {
            @include translate(0, -4px);
        }
        .card__header {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            .card__header-title {
                @include heading-text-md;
            }
            .card__header-icon {
                @include heading-text-md;
            }
            .card__header-totaljam {
                @include heading-text-md;
                opacity: 50%;
            }
        }
        .card__desc {
          margin-bottom: 1.5rem;
            .card__desc-content {
                @include body-text-sm;
            }
        }
        .card__info {
            display: flex;
            gap: 2rem;
            .card__info-totalkelas {
                @include body-text-sm;
                font-weight: bold;
            }
            .card__info-totalmodul {
                @include body-text-sm;
                font-weight: bold;
            }
            .card__info-totallatihan {
                @include body-text-sm;
                font-weight: bold;
            }
        }
    }
}
</style>