<template>
  <div class="h-screen w-screen p-36 z-10">
    <div class="container mx-auto bg-gray">
      <h1 class="text-white font-mono font-bold text-xl mb-4">Hackhaton showcase</h1>
      <FilterButton text="Q1 2021" color="yellow"/>
      <FilterButton text="Q2 2021" color="green"/>
      <FilterButton text="Q3 2021" color="blue"/>
    </div>
  </div>
</template>

<script>
import FilterButton from './FilterButton.vue';

export default {
  name: 'HelloWorld',
  components: {
    FilterButton
  }
}
</script>

<style scoped>

</style>
