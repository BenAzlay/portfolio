<template>
  <div>
    <NavMenu />
    <Nuxt />
    <ContactModal v-show="messageModalOpened" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageModalOpened: false
    }
  },
  created() {
    this.$nuxt.$on('message', (bool) => {
      this.messageModalOpened = bool
    })
  }
}
</script>

<style>
.button {
  @apply transition-colors duration-300 cursor-pointer text-purple-700 font-medium border border-2 border-purple-700 rounded-full py-2 px-4 hover:bg-purple-700 hover:text-white;
}
</style>