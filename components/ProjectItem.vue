<template>
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="project flipper">
            <nuxt-img class="logo front" :src="`../static/logos/${logo}.png`" :alt="logo" />
            <div class="info back">
                <p class="description">{{ description }}</p>
                <a v-if="ctaTarget.length" :href="ctaTarget"  target="_blank" rel="noopener noreferrer" class="cta">{{ cta }}</a>
                <div v-else class="disabled-cta">{{ cta }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        logo: String,
        description: String,
        cta: String,
        ctaTarget: String
    }
}
</script>

<style scoped>
.project {
  @apply w-full h-60 rounded-lg flex items-center justify-center shadow-lg border border-gray-100 dark:bg-light-900 dark:text-dark-600;
}

.logo {
    @apply w-60 max-h-min;
}

.info {
    @apply flex flex-col space-y-6 px-4 items-center justify-center;
}

.description {
    @apply font-medium text-center;
}

.cta {
    @apply text-green font-medium border border-2 border-green rounded-full py-2 px-4 hover:bg-green hover:text-white transition-colors duration-300 cursor-pointer;
}
.disabled-cta {
    @apply text-gray-400 font-medium border border-2 border-gray-400 rounded-full py-2 px-4;
}

/* entire container, keeps perspective */
.flip-container {
	perspective: 1000px;
}
/* flip the pane when hovered */
.flip-container:hover .flipper {
    transform: rotateY(180deg);
}

/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;

	position: relative;
}

/* hide back of pane during swap */
.front, .back {
	backface-visibility: hidden;

	position: absolute;
	top: 50;
	left: 50;
}

/* front pane, placed above back */
.front {
	z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
	transform: rotateY(180deg);
}
</style>