<template>
    <div class="projects-grid">
        <ProjectItem v-for="project in projects" :key="project.title" :logo="project.logo"
            :description="project.description" :cta="project.cta" :ctaTarget="project.ctaTarget" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    title: "Riskophobe",
                    logo: "Riskophobe",
                    description: "Invest Risk-Free. Get Money Back",
                    cta: "Visit Riskophobe",
                    ctaTarget: "https://riskophobe.com/"
                },
                {
                    title: "Flashstake",
                    logo: "Flashstake",
                    description: "Flashstake | Earn instant upfront yield",
                    cta: "Visit flashstake.io",
                    ctaTarget: "https://flashstake.io/"
                },
                {
                    title: "^Upside",
                    logo: "Upside",
                    description: "^Upside | The Stock Market of X",
                    cta: "Visit upside.wtf",
                    ctaTarget: "https://upside.wtf/"
                },
                {
                    title: "Epoch",
                    logo: "Epoch",
                    description: "Epoch | The First Network State",
                    cta: "Visit epochisland.io",
                    ctaTarget: "https://epochisland.io/"
                },
                {
                    title: "Artur.ai",
                    logo: "Artur",
                    description: "Wealth management platform for fiat & crypto",
                    cta: "Visit artur.ai",
                    ctaTarget: "https://artur.ai/"
                },
                {
                    title: "Eldar Sofer",
                    logo: "EldarSofer",
                    description: "Portfolio of artist Elder Sofer",
                    cta: "Meet Eldar Sofer",
                    ctaTarget: "https://eldarsofer.com/"
                },
                {
                    title: "Clinic Buddy",
                    logo: "Healint",
                    description: "An in-app to facilitate patient-doctor relationship.",
                    cta: "In-app module",
                    ctaTarget: ""
                },
                {
                    title: "SSF",
                    logo: "Marine",
                    description: "Project management and full-stack development with the MEVN stack of the Service de Soutien de la Flotte Documentation Portal.",
                    cta: "On the French military intranet",
                    ctaTarget: ""
                },
                {
                    title: "Walletvote",
                    logo: "Walletvote",
                    description: "Web3 collaborative media about companies' ethical practices",
                    cta: "Visit walletvote.org",
                    ctaTarget: "https://walletvote.org"
                },
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