<template>
  <div :class="$colorMode.preference === 'dark' ? 'dark' : 'light'">
    <NavMenu @switchColorMode="switchColorMode" />
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
  @apply transition-colors duration-300 cursor-pointer text-green font-medium border border-2 border-green rounded-full py-2 px-4 hover:bg-green hover:text-white;
}
</style>