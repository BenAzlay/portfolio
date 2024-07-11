<template>
  <div style="width: 100%">
    <MainTitle />
    <div class="bg-blue big-part">
      <h2 class="salut">
        Salut ! I'm Benjamin Azoulay
      </h2>
      <p class="description">
        Creativity, Curiosity, Challenge. Three 'C's of my Character.
        That's why I'm such a passionate web developer: it taps into the fabric of my very self.
        For three years now, be it with Vue, React, Express, Django...
        I've been enjoying every one of my full-stack jobs, or 'challenges', as I like to call them.
        Furthermore, I want to contribute my skills to an open, private, censorship-free internet. That's Web3.
      </p>
      <div class="gap" />
      <SkillsGrid />
    </div>
    <div class="big-part">
      <h2 class="part-title">
        A Few Recent Projects
      </h2>
      <h3 class="part-subtitle">
        This list is not exhaustive
      </h3>
      <div class="gap" />
      <ProjectsGrid />
    </div>
    <div class="separator" />
    <div class="big-part">
      <h2 class="part-title">
        Testimonials
      </h2>
      <h3 class="part-subtitle">
        Sweet recommendations from people I've worked with...
      </h3>
      <div class="gap" />
      <RecoCarrousel />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Benjamin Azoulay.'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.fade-in-enter-active {
  transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-in-leave-active {
  transition: opacity 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}

.gap {
  @apply h-12;
}

.big-part {
  @apply w-full flex flex-col px-3 py-20 justify-center items-center text-center min-h-screen space-y-4;
}

.bottom-part {
  @apply w-full flex flex-col px-3 py-10 justify-center items-center text-center space-y-4;
}

.part-title {
  @apply flex flex-row items-center font-bold text-2xl;
}

.part-subtitle {
  @apply text-lg sm:px-62;
}

.salut {
  @apply flex flex-row items-center text-white font-bold text-2xl;
}

.description {
  @apply text-white text-lg sm:px-62;
}

.separator {
  @apply w-full bg-gray-200;
  height: 1px;
}
</style>