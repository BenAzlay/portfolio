<template>
    <div class="skill-grid">
        <div class="skill-col">
          <h1 class="skill-title">Front-end</h1>
          <p class="">Seamless UI/UX is an art, and I like to think of myself as an artist.</p>
          <h2 class="skill-subtitle">Languages:</h2>
          <p>JavaScript, TypeScript, HTML, CSS</p>
          <h2 class="skill-subtitle">Frameworks:</h2>
          <LogoListItem name="Nuxt.js" logo="Nuxt" />
          <LogoListItem name="Vue.js" logo="Vue" />
          <LogoListItem name="React.js" logo="React" />
          <LogoListItem name="Tailwindcss" logo="Tailwind" />
        </div>
        <div class="skill-col">
          <h1 class="skill-title">Back-end</h1>
          <p class="">I love the struggle of bringing data and APIs to life.</p>
          <h2 class="skill-subtitle">Languages:</h2>
          <p>JavaScript, TypeScript, Python</p>
          <h2 class="skill-subtitle">Technologies:</h2>
          <LogoListItem name="Node.js" logo="Node" />
          <LogoListItem name="Django" logo="Django" />
        </div>
        <div class="skill-col">
          <h1 class="skill-title">Web3 & Blockchain</h1>
          <p class="">The 'Web 3.0' revolution is coming for a more humane internet, and I'm charging at the frontline</p>
          <h2 class="skill-subtitle">Languages:</h2>
          <p>JavaScript, Solidity</p>
          <h2 class="skill-subtitle">Technologies:</h2>
          <LogoListItem name="web3.js" logo="Web3" />
          <LogoListItem name="Solidity" logo="Solidity" />
          <LogoListItem name="Remix IDE" logo="Remix" />
        </div>
      </div>
</template>

<style scoped>
.skill-grid {
  @apply flex flex-col smw-11/12 sm:grid sm:grid-cols-3 gap-4;
}

.skill-col {
  @apply flex flex-col items-center space-y-4 bg-white shadow-lg rounded-lg px-6 py-4;
}

.skill-title {
  @apply font-bold text-lg;
}

.skill-subtitle {
  @apply font-bold text-purple-700 text-base;
}
</style>