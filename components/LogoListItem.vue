<template>
    <div>
        <span class="list-item">
            <nuxt-img style="height: 20px" :src="`../static/logos/${logo}.png`" :alt="name" />
            <p class="font-medium">{{ name }}</p>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        logo: String,
        name: String
    }
}
</script>

<style scoped>
.list-item {
    @apply flex flex-row items-center space-x-2;
}
</style>