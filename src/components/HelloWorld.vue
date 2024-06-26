<template>
  <div class="h-screen w-screen p-36 z-10">
    <div class="container mx-auto bg-gray">
      <h1 class="text-white font-mono font-bold text-2xl mb-4">
        Hackathon showcase
      </h1>
      <div class="flex space-x-4 items-baseline mb-3 flex-wrap space-y-4">
        <div>
          <FilterInput v-model="text" />
        </div>
        <div class="whitespace-nowrap space-x-2">
          <FilterButton
            v-for="year in hackathonsLabels"
            :key="year + !hackathons.includes(year)"
            :text="year"
            color="yellow"
            :disabled="!hackathons.includes(year)"
            v-on:click="toggleHackathon(year)"
          />
        </div>
        <div class="whitespace-nowrap space-x-2">
          <FilterButton
            v-for="label in labelsLabels"
            :key="label + !labels.includes(label)"
            :text="label"
            color="red"
            :disabled="!labels.includes(label)"
            v-on:click="toggleLabel(label)"
          />
        </div>
        <div class="flex-grow text-white font-mono flex flex-wrap space-x-2 text-right justify-end">
          <span> Projects: {{ getProjects.length }} | </span>
          <div>
            <span
              v-on:click="page--"
              :class="
                page > 1
                  ? 'text-green-400 mr-4 cursor-pointer'
                  : 'text-gray-400 mr-4 pointer-events-none'
              "
              >Previous Page</span
            >
            <span
              v-on:click="page++"
              :class="
                getProjects.length > page * PER_PAGE
                  ? 'text-purple-400 cursor-pointer hover:text-purple-200'
                  : 'text-gray-400 pointer-events-none'
              "
              >Next Page</span
            >
          </div>
        </div>
      </div>
      <div class="flex space-x-1 space-y-1 flex-wrap">
        <div
          v-for="project in paginateResults(getProjects)"
          :key="project.name"
        >
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

const PER_PAGE = 10;

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
    PER_PAGE,
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
              .some((name) => name.toLowerCase().includes(text)) ||
              proj.keywords?.some(word => word.toLowerCase().includes(text))
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
      this.page = 1;
    },
  },
  methods: {
    paginateResults(projects) {
      return projects.slice(
        (this.page - 1) * PER_PAGE,
        (this.page - 1) * PER_PAGE + PER_PAGE
      );
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
