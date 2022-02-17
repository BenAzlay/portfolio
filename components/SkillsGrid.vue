<template>
    <div class="skill-grid">
        <div v-for="(skill, i) in skills" :key="i" :id="skill.title" class="skill-col">
          <div class="skill-section">
            <h1 class="skill-title">{{skill.title}}</h1>
            <p>{{skill.description}}</p>
          </div>
          <!-- Languages -->
          <div id="languages" class="skill-section">
            <h2 class="skill-subtitle">Languages:</h2>
            <p>{{skill.languages}}</p>
          </div>
          <!-- Technologies -->
          <div id="technologies" class="skill-section">
            <h2 class="skill-subtitle">Technologies:</h2>
            <LogoListItem
              v-for="tech in skill.technologies"
              :key="tech.name"
              :name="tech.name"
              :logo="tech.logo" />
          </div>
          <!-- Certifications -->
          <div v-if="skill.certifications" id="technologies" class="skill-section">
            <!-- <h2 class="skill-subtitle">Certifications:</h2> -->
            <div id="certifications" class="certification-grid">
              <CertificationBadge
                v-for="certif in skill.certifications"
                :key="certif.image"
                :image="certif.image"
                :title="certif.title"
                :url="certif.url" />
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        // Frontend
        {
          title: "Front-end",
          description: "Seamless UI/UX is an art, and I like to think of myself as an artist.",
          languages: "JavaScript, TypeScript, HTML, CSS",
          technologies: [
            {
              name: "Nuxt.js",
              logo: "Nuxt"
            },{
              name: "Vue.js",
              logo: "Vue"
            },{
              name: "React.js",
              logo: "React"
            },{
              name: "TailwindCSS",
              logo: "Tailwind"
            },
          ]
        },
        // Backend
        {
          title: "Back-end",
          description: "I love the struggle of bringing data and APIs to life.",
          languages: "JavaScript, TypeScript, Python",
          technologies: [
            {
              name: "Node.js",
              logo: "Node"
            },{
              name: "Django",
              logo: "Django"
            }
          ]
        },
        // Web3
        {
          title: "Web3 & Blockchain",
          description: "The 'Web 3.0' revolution is coming for a more humane internet, and I'm charging in the frontline",
          languages: "JavaScript, Solidity",
          technologies: [
            {
              name: "Solidity",
              logo: "Solidity"
            },{
              name: "Web3.js",
              logo: "Web3"
            },{
              name: "Truffle Suite",
              logo: "Truffle"
            }
          ],
          certifications: [
            {
              image: "blockchain",
              title: "Certified Blockchain Developer",
              url: "https://www.credential.net/f819b4fb-ab67-4ba4-a8e4-2a028545178b"
            },
            {
              image: "nft",
              title: "Certified NFT Developer",
              url: "https://www.credential.net/469fa953-8f5a-46bc-8bc3-5c225dd8fb3b"
            }
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
.skill-grid {
  @apply flex flex-col sm:w-11/12 sm:grid sm:grid-cols-3 gap-4;
}

.skill-col {
  @apply flex flex-col items-center space-y-6 bg-white shadow-lg rounded-lg px-6 py-4;
}

.skill-section {
  @apply flex flex-col items-center space-y-3;
}

.skill-title {
  @apply font-bold text-lg;
}

.skill-subtitle {
  @apply font-bold text-purple-700 text-base;
}
.certification-grid {
  @apply flex flex-row space-x-10;
}
</style>