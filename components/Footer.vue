<template>
    <div class="bg-purple-700 bottom-part rounded-t-2xl">
      <h1 class="text-white font-bold text-xl">
        Interested in working working together?
      </h1>
      <div
        @click="$nuxt.$emit('message', true)"
        class="ping-button">
        Let's get in touch!
      </div>
      <p class="text-white font-semibold text-lg">You can also ping me on these sites:</p>
      <div class="flex flex-row items-center space-x-4">
          <a class="logo-item" href="https://www.linkedin.com/in/benjaminazoulay1/"  target="_blank" rel="noopener noreferrer">
              <img class="logo-img" src="../static/logos/LinkedIn.png" alt="LinkedIn" title="My LinkedIn">
          </a>
          <a class="logo-item" href="https://www.malt.fr/profile/benjaminazoulay1"  target="_blank" rel="noopener noreferrer">
              <img class="logo-img" src="../static/logos/Malt.png" alt="Malt" title="My Malt">
          </a>
          <a class="logo-item" href="https://blog.benjaminazoulay.com/"  target="_blank" rel="noopener noreferrer">
              <img class="logo-img" src="../static/logos/Hashnode.png" alt="Hashnode tutorials" title="My Tutorials">
          </a>
          <a class="logo-item" href="https://github.com/BenAzlay"  target="_blank" rel="noopener noreferrer">
              <img class="logo-img" src="../static/logos/GitHub.png" alt="GitHub" title="My GitHub">
          </a>
      </div>
      <p class="copyright">Copyright © 2021 Benjamin Azoulay</p>
    </div>
</template>

<style scoped>
.copyright {
  @apply text-gray-400 pt-4;
}

.ping-button {
  @apply transition-colors duration-300 cursor-pointer;
  @apply text-white text-xl font-medium border-2 border-white rounded-full py-4 px-6;
  @apply hover:bg-white hover:text-purple-700;
}

.logo-img {
    @apply h-10 w-10;
}

.logo-item {
  @apply bg-white rounded-full p-4;
}

.logo-item:hover {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>