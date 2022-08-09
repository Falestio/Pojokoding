<script setup>

const route = useRoute()
const allArticleWithTheSameCategory = await queryContent(`/${route.params.namakategori}`)
    .only(['_path', 'title','subcategory', '_partial'])
    .where({_partial: false})
    .find()

const currentContent = await queryContent(route.path).where({ _partial: false }).findOne()
const currentContentPath = currentContent._path
const isLatihan = currentContent.latihan
console.log(isLatihan);

</script>

<template>
    <div>
        <CourseArticle
            v-if="!isLatihan"
            :current-article-path="currentContentPath"
            :all-article-with-the-same-category="allArticleWithTheSameCategory"
        ></CourseArticle>
        <Ide
            v-if="isLatihan"
            :currentContent="currentContent"
            :currentContentPath="currentContentPath"
            :allArticleWithTheSameCategory="allArticleWithTheSameCategory"
        ></Ide>
    </div>
</template>

<style scoped>
.article-container {
    max-width: 744px;
}

.drawer-content {
    height: auto;
}

/* cyan 500 */
.router-link-exact-active {
    color: #0ea5e9; 
    text-decoration: underline;
    text-underline-offset: 4px;
}

</style>