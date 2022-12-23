<template>
  <div :class="colorMode">
    <NavMenu @switchColorMode="switchColorMode" :colorMode="colorMode" />
    <Nuxt />
    <ContactModal v-show="messageModalOpened" />
  </div> 
</template>

<script>
export default {
  data () {
    return {
      messageModalOpened: false,
      colorMode: 'light'
    }
  },
  created() {
    this.$nuxt.$on('message', (bool) => {
      this.messageModalOpened = bool
    })
  },
  mounted() {
    // set initial theme if $colorMode === system 
    this.colorMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  },
  watch: {
    '$colorMode.preference': {
      handler (newColor) {
        this.colorMode = newColor;
      }
    }
  },
  methods: {
    switchColorMode() {
      this.$colorMode.preference = this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.button {
  @apply transition-colors duration-300 cursor-pointer text-blue font-medium border border-2 border-blue rounded-full py-2 px-4 hover:bg-blue hover:text-white;
}
</style>