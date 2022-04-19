<template>
    <div class="container">
        <div class="roadmap__container">
            <h1 class="roadmap__title">Roadmap</h1>            
            <RoadmapCard/>
            <RoadmapCard/>
            <RoadmapCard/>
            <RoadmapCard/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.roadmap__container {
    margin: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    .roadmap__title {
        @include heading-text-lg;
    }
}

</style>