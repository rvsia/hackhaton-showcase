<template>
      <div class="bg-opacity-60 bg-black text-white min-w-md w-80 rounded-2xl blur-sm h-full flex flex-col">
          <img :src="project.image || '/placeholder.png'" class="w-sm rounded-t-2xl" />
          <div class="p-3 flex flex-col flex-grow">
            <h1 class="font-mono text-2xl">{{project.name}}</h1>
            <div class="flex space-x-2 mt-1 flex-wrap">
                <div v-for="author in newAuthors" :key="author.name" :class="author.class">
                    {{author.name}}
                </div>
            </div>
            <div class="flex mb-2 space-x-2 mt-2">
                <span v-for="label in newLabels" :key="label.text" :class="label.class">{{label.text}}</span>
            </div>
            <div class="mt-1">{{project.description}}</div>
            <div class="flex space-x-2">
                <a v-for="link in project.additionalLinks" :key="link.label" target="_blank" rel="noopener noreferrer" :href="link.link" class="text-yellow-400 hover:text-yellow-500 cursor-pointer">
                    {{link.label}}
                </a>
            </div>
            <div v-if="project.link" class="text-right bottom-0 mt-auto mx-0 mb-0">
                <a target="_blank" rel="noopener noreferrer" :href="project.link" class="text-pink-400 hover:text-pink-500 cursor-pointer animate-pulse">
                    ... see more!
                </a>
            </div>
          </div>
      </div>
</template>

<script>
const colors = ['purple', 'green', 'pink', 'yellow', 'blue']

export default {
  name: 'ProjectCard',
  props: ['project'],
  data: () => ({colors}),
  setup: (props) => {
    const newAuthors = props.project.authors.map((author, index) => ({
        ...author,
        class: `text-xl text-${colors[index % 5]}-400`
    }))

    const newLabels = [
        {
            text: props.project.hackathon,
            class: `text-yellow-400 border-2 rounded-2xl p-1 border-yellow-400 cursor-pointer hover:bg-purple-700`
        },
        ...props.project.labels.map((label) => ({
            text: label,
            class: `text-red-400 border-2 rounded-2xl p-1 border-red-400 cursor-pointer hover:bg-purple-700`
        }))
    ]

    return ({newAuthors, newLabels})
  }
}
</script>

<style scoped>

</style>
