<template>
      <div class="bg-opacity-60 bg-black text-white max-w-sm rounded-2xl blur-sm">
          <img :src="project.image" class="w-sm rounded-t-2xl" />
          <div class="p-3">
            <h1 class="font-mono text-2xl mb-2">{{project.name}}</h1>
            <div class="flex mb-4 space-x-2">
                <div v-for="author in newAuthors" :key="author.name" :class="author.class">
                    {{author.name}}
                </div>
            </div>
            <div class="flex mb-4 space-x-2">
                <span v-for="label in newLabels" :key="label.text" :class="label.class">{{label.text}}</span>
            </div>
            <div class="mt-4 mb-2">{{project.description}}</div>
            <div class="text-right">
                <a target="_blank" rel="noopener noreferrer" :href="project.link" class="text-pink-400 hover:text-pink-500 cursor-pointer animate-pulse">
                    See more...
                </a>
            </div>
          </div>
      </div>
</template>

<script>
const colors = ['purple', 'green', 'red', 'yellow', 'blue']

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
            class: `text-white-400 border-2 rounded-2xl p-1 border-white-400 cursor-pointer hover:bg-purple-700`
        },
        ...props.project.labels.map((label, index) => ({
            text: label,
            class: `text-${colors[(index + 2) % 5]}-400 border-2 rounded-2xl p-1 border-${colors[(index + 2) % 5]}-400 cursor-pointer hover:bg-purple-700`
        }))
    ]

    return ({newAuthors, newLabels})
  }
}
</script>

<style scoped>

</style>
