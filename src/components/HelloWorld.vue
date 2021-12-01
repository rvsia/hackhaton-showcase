<template>
  <div class="h-screen w-screen p-36 z-10">
    <div class="container mx-auto bg-gray">
      <h1 class="text-white font-mono font-bold text-2xl mb-4">Hackhaton showcase</h1>
      <FilterButton text="Q1 2021" color="yellow"/>
      <FilterButton text="Q2 2021" color="green"/>
      <FilterButton text="Q3 2021" color="blue"/>
      <div class="mt-7" />
      <FilterButton text="Fun" color="red"/>
      <FilterButton text="Games" color="red"/>
      <FilterButton text="ConsoleDot" color="red"/>
      <div class="mt-7" />
      <div class="flex space-x-1 flex-wrap">
        <div v-for="project in projects" :key="project.name">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterButton from './FilterButton.vue';
import ProjectCard from './ProjectCard.vue';

import projects from '../projects';

export default {
  name: 'HelloWorld',
  data: () => ({projects}),
  components: {
    FilterButton,
    ProjectCard
  }
}
</script>

<style scoped>

</style>
