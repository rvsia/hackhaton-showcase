<template>
      <span :class="newClass">{{text}}</span>
</template>

<script>
export default {
  name: 'FilterButton',
  props: ['color', 'text'],
  setup: (props) => {
      return ({
          newClass: `mr-2 text-${props.color}-400 border-2 rounded-2xl p-2 border-${props.color}-400 cursor-pointer hover:bg-purple-700`
      })
  }
}
</script>

<style scoped>

</style>
