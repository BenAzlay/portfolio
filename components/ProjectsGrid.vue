<template>
    <div class="projects-grid">
        <ProjectItem
            v-for="project in projects" :key="project.title"
            :logo="project.logo"
            :description="project.description"
            :cta="project.cta"
            :ctaTarget="project.ctaTarget" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
            {
                    title: "Stop Getting Rekt",
                    logo: "SGR",
                    description: "Maximize your Upside. Minimize your downside.",
                    cta: "Stop Getting Rekt",
                    ctaTarget: "https://stopgettingrekt.com/"
                },
                {
                    title: "Epoch",
                    logo: "Epoch",
                    description: "The First Network State.",
                    cta: "Visit epochisland.io",
                    ctaTarget: "https://epochisland.io/"
                },
                {
                    title: "Flido",
                    logo: "Flido",
                    description: "Instant upfront stETH yield.",
                    cta: "Visit flido.fi",
                    ctaTarget: "https://flido.fi/"
                },
                {
                    title: "Flashstake",
                    logo: "Flashstake",
                    description: "DeFi dApp to earn instant yield with your crypto.",
                    cta: "Visit flashstake.io",
                    ctaTarget: "https://flashstake.io/"
                },
                {
                    title: "Artur.ai",
                    logo: "Artur",
                    description: "Wealth management platform for fiat & crypto, made with React & Django.",
                    cta: "Visit artur.ai",
                    ctaTarget: "https://artur.ai/"
                },
                {
                    title: "Walletvote",
                    logo: "Walletvote",
                    description: "Web3 collaborative media about companies' ethical practices, made with Nuxt, Node, Solidity, Web3.js...",
                    cta: "Visit walletvote.org",
                    ctaTarget: "https://walletvote.org"
                },
                // {
                //     title: "MedecinAI",
                //     logo: "MedecinAI",
                //     description: "Cloud platform using AI to detect glioma tumors in MRIs, made with Vue.js, .NET, Flask...",
                //     cta: "Momentarily down",
                //     ctaTarget: ""
                // },
                {
                    title: "SNC",
                    logo: "SNC",
                    description: "Documentation and questionnaire module for the Syndicat National des Cardiologues, made with Vue.js.",
                    cta: "360medics in-app",
                    ctaTarget: ""
                },
                {
                    title: "Clinic Buddy",
                    logo: "Healint",
                    description: "An in-app to facilitate patient-doctor relationship using Vue.js (order from Novartis to Healint for $275000).",
                    cta: "In-app module",
                    ctaTarget: ""
                },
                {
                    title: "SSF",
                    logo: "Marine",
                    description: "Project management and full-stack development with the MEVN stack of the Service de Soutien de la Flotte Documentation Portal.",
                    cta: "On the French military intranet",
                    ctaTarget: ""
                }
            ]
        }
    }
}
</script>

<style scoped>
.projects-grid {
  @apply w-11/12 grid grid-cols-1 sm:grid-cols-3 gap-4;
}
</style>