<template>
    <a :href="url"  target="_blank" rel="noopener noreferrer">
        <nuxt-img
            style="height: 100px"
            :src="`../static/certifications/${image}.png`"
            :title="title"
            :alt="title" />
    </a>
</template>

<script>
export default {
    props: {
        image: String,
        title: String,
        url: String
    }
}
</script>

<style scoped>
</style>