<template>
    <div class="carrousel">
        <Recommendation :reco="recos[recoIndex]" />
        <div
            class="flex flex-row items-center space-x-4">
            <div
                v-for="(reco, index) in recos"
                :key="index"
                @click="recoIndex = index"
                class="dot" :class="index === recoIndex ? 'selected' : 'unselected'"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recoIndex: 0,
            recos: [
                {
                    picture: "DavidOks",
                    name: "David Oks",
                    role: "CEO, Millennium Gestion",
                    content: "Benjamin accomplished his mission very well end-to-end. He had an excellent and quick grasp of the projet from the start, always delivering within the deadlines.",
                },
                {
                    picture: "Jiechao",
                    name: "Jiechao Lim",
                    role: "CTO, Healint",
                    content: "Benjamin Azoulay takes on new challenges all the way. I like his critical thinking. The team and I would have died without him!",
                }
            ]
        }
    }
}
</script>

<style scoped>
.carrousel {
    @apply flex flex-col items-center space-y-8;
}
.dot {
    @apply transition-colors duration-300 cursor-pointer;
    @apply h-5 w-5 rounded-full;
}
.unselected {
    @apply border-2 border-gray-200 hover:border-blue hover:bg-blue;
}
.selected {
    @apply bg-blue;
}
</style>