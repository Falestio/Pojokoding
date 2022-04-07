<template>
<div>
    <div
        class="slider"
        v-for="(image, index) in imagesData"
        :key="index"
        :class="showImage(index)"
    >
        <div class="images">
            <img :src="imageSource(image)" class="image" />
        </div>
        <div class="buttons">
            <span class="button-prev" @click="prev()">back</span>
            <p class="pagination">{{index + 1}} / {{ imagesLength }}</p>
            <span class="button-next" @click="next()">next</span>
        </div>
        <p class="image-description" v-html="image.desc"></p>
    </div>
</div>
</template>

<script>
export default {
    props: ['imagesData'],

    data() {
        return {
            currentIndex: 0,
        }
    },

    computed: {
        imagesLength(){
            return this.imagesData.length
        }
    },

    methods: {
        showImage(index) {
            if (index == this.currentIndex)
                return {
                    visible: true,
                }
        },

        next() {
            if(this.currentIndex < this.imagesLength - 1) this.currentIndex++
        }, 

        prev() {
            if(this.currentIndex > 0) this.currentIndex--
        },

        imageSource(image) {
            try {
                return require(`~/assets/course/dasar-python/${image.link}`)
            } catch (e) {
                return null
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.slider {
    display: none;
    margin: 1rem 0;
    border-bottom: 1px solid $n600;
}

.buttons {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    .button-prev {
        @include button;
        @include button-outline;
        @include button-sm;
        @include body-text-sm
    }
    .button-next {
        @include button;
        @include button-outline;
        @include button-sm;
        @include body-text-sm
    }
}

.visible {
    display: block !important;
}
</style>