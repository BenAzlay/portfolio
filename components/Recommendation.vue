<template>
    <div class="recommendation">
        <img
            :src="require(`../static/pictures/${reco.picture}.png`)"
            class="picture"
            :alt="reco.name" />
        <p class="quote">
            "{{reco.content}}"
        </p>
        <div>
            <p class="name">{{reco.name}}</p>
            <p class="role">{{reco.role}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        reco: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped>
.recommendation {
  @apply flex flex-col items-center space-y-8;
}
.picture {
    @apply rounded-full h-24;
}
.quote {
    @apply sm:px-62 text-xl;
}
.name {
    @apply text-lg font-bold;
}
.role {
    @apply text-lg font-thin;
}
</style>