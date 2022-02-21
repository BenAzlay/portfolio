<template>
  <div class="center-screen">
    <div class="space-y-8 mb-8">
      <h1 class="font-bold text-5xl text-gray-800 dark:text-light-600">Front-end. Back-end. Blockchain.</h1>
      <h2 class="text-2xl mb-20">I make cutting edge full-stack web3 sites, with passion.</h2>
    </div>
    <nuxt-img class="picture" src="/../static/Benjamin_Azoulay.jpg" title="Benjamin Azoulay" alt="Benjamin Azoulay" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.center-screen {
  @apply flex flex-col px-6 justify-center items-center text-center min-h-screen space-y-4;
}

.picture {
  @apply h-50 rounded-full;
}
</style>