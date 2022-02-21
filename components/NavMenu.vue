<template>
    <div class="navbar">
        <!-- BURGER -->
        <div class="burger" @click="opened = !opened">
            <div class="inner-burger">
                <span aria-hidden="true" class="block absolute h-1 w-8 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': opened, '-translate-y-2': !opened }"></span>
                <span aria-hidden="true" class="bar" :class="{'opacity-0': opened } "></span>
                <span aria-hidden="true" class="block absolute h-1 w-8 bg-current transform transition duration-500 ease-in-out" :class="{'-rotate-45': opened, 'translate-y-2': !opened}"></span>
            </div>
        </div>
        <!-- CONTENT -->
        <transition name="slide">
            <div v-if="opened || !mobile" class="content">
                <div class="mr-0 sm:mr-auto nav-side">
                    <div @click="$nuxt.$emit('message', true)" class="nav-item button" title="Ping me!">Get in touch</div>
                    <a
                        class="nav-item nav-text" 
                        href="https://blog.benjaminazoulay.com"  target="_blank" rel="noopener noreferrer"
                        title="Benjamin Azoulay's tutorials (The Blockchain Benjamin)">
                        Tutorials
                    </a>
                </div>

                <div class="logos-grid sm:nav-side">
                    <a
                        v-for="(site, i) in socialNetworks"
                        :key="i"
                        class="nav-item"
                        :href="site.url"  target="_blank" rel="noopener noreferrer">
                        <nuxt-img class="nav-img" :src="`../static/logos/${site.image}.png`" :alt="site.title" :title="site.title" />
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            opened: false,
            mobile: true,
            socialNetworks: [
                {
                    image: "Malt",
                    title: "Benjamin Azoulay on Malt",
                    url: "https://www.malt.fr/profile/benjaminazoulay1"
                },
                {
                    image: "StackOverflow",
                    title: "Benjamin Azoulay on StackOverflow",
                    url: "https://stackoverflow.com/users/17199954/benjamin-azoulay"
                },
                {
                    image: "GitHub",
                    title: "Benjamin Azoulay on GitHub (@BenAzlay)",
                    url: "https://github.com/benAzlay"
                },
                {
                    image: "LinkedIn",
                    title: "Benjamin Azoulay on LinkedIn",
                    url: "https://www.linkedin.com/in/benjaminazoulay1/"
                }
            ]
        }
    },
    mounted() {
        this.mobile = this.isMobile;
    },
    computed: {
        isMobile () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
    }
}
</script>

<style scoped>
/* Navbar styling */
.navbar {
    @apply flex sm:inline flex-col w-full sm:flex-row py-0 px-0 sm:py-8 sm:px-10 items-center;
}

.nav-side {
    @apply flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center;
}

.nav-img {
    @apply h-10;
}

.nav-item {
    @apply text-lg transition-colors duration-300 cursor-pointer;
}

.nav-text {
    @apply hover:text-purple-700 font-medium;
}

.logos-grid {
    @apply grid grid-cols-2 gap-4 sm:flex;
}

/* Burger styling */
.burger {
    @apply ml-auto cursor-pointer text-gray-500 w-12 h-12 relative mr-2 display sm:hidden;
}
.inner-burger {
    @apply block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2;
}
.bar {
    @apply block absolute h-1 w-8 bg-current transform transition duration-500 ease-in-out;
}
.content {
    @apply flex flex-col sm:flex-row items-center w-full sm:w-auto shadow-lg sm:shadow-none pb-4 sm:pb-0 sm:px-10 space-y-4 sm:space-y-0;
}
/* Slide transition */
.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 300px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>