<template>
  <div class="h-screen w-screen p-36 z-10">
    <div class="container mx-auto bg-gray">
      <h1 class="text-white font-mono font-bold text-2xl mb-4">
        Hackathon showcase
      </h1>
      <div class="flex space-x-4 items-baseline mb-3">
        <div>
          <FilterInput v-model="text" />
        </div>
        <div>
          <FilterButton
            v-for="year in hackathonsLabels"
            :key="year + !hackathons.includes(year)"
            :text="year"
            color="yellow"
            :disabled="!hackathons.includes(year)"
            v-on:click="toggleHackathon(year)"
          />
        </div>
        <div>
          <FilterButton
            v-for="label in labelsLabels"
            :key="label + !labels.includes(label)"
            :text="label"
            color="red"
            :disabled="!labels.includes(label)"
            v-on:click="toggleLabel(label)"
          />
        </div>
        <div class="flex-grow text-white font-mono">
          Projects: {{ getProjects.length }} |
          <span v-on:click="page--" :class="page > 1 ? 'text-green-400 mr-4 cursor-pointer' : 'text-gray-400 mr-4'">Previous Page</span>
          <span v-on:click="page++" :class="getProjects.length > (page * 6) ? 'text-purple-400 cursor-pointer hover:text-purple-200' : 'text-gray-400'">Next Page</span>
        </div>
      </div>
      <div class="flex space-x-1 flex-wrap">
        <div v-for="project in paginateResults(getProjects)" :key="project.name">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterButton from "./FilterButton.vue";
import FilterInput from "./FilterInput.vue";
import ProjectCard from "./ProjectCard.vue";

import projects from "../projects";

const hackathons = [...new Set(projects.map(({ hackathon }) => hackathon))];
const labels = [...new Set(projects.map(({ labels }) => labels).flat())];

export default {
  name: "HelloWorld",
  data: () => ({
    projects,
    page: 1,
    text: "",
    labels: [...labels],
    hackathons: [...hackathons],
    hackathonsLabels: [...hackathons],
    labelsLabels: [...labels],
  }),
  computed: {
    getProjects() {
      let filteredProjects = this.projects;

      let text = this.text.toLowerCase();

      if (text) {
        filteredProjects = filteredProjects.filter((proj) => {
          return (
            proj.name.toLowerCase().includes(text) ||
            proj.description.toLowerCase().includes(text) ||
            proj.authors
              .map(({ name }) => name)
              .some((name) => name.toLowerCase().includes(text))
          );
        });
      }

      filteredProjects = filteredProjects.filter((proj) =>
        this.hackathons.includes(proj.hackathon)
      );
      filteredProjects = filteredProjects.filter((proj) =>
        proj.labels.some((lab) => this.labels.includes(lab))
      );

      return filteredProjects;
    },
  },
  watch: {
    text() {
      this.page = 1
    }
  },
  methods: {
    paginateResults(projects) {
      return projects.slice((this.page - 1) * 6, ((this.page - 1) * 6) + 6)
    },
    toggleHackathon(hackathon) {
      this.page = 1;
      if (this.hackathons.includes(hackathon)) {
        this.hackathons.splice(this.hackathons.indexOf(hackathon), 1);
      } else {
        this.hackathons.push(hackathon);
      }
    },
    toggleLabel(label) {
      this.page = 1;
      if (this.labels.includes(label)) {
        this.labels.splice(this.labels.indexOf(label), 1);
      } else {
        this.labels.push(label);
      }
    },
  },
  components: {
    FilterButton,
    ProjectCard,
    FilterInput,
  },
};
</script>

<style scoped>
</style>
