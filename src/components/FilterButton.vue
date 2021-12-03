<template>
      <span :class="newClass">{{text}}</span>
</template>

<script>
export default {
  name: 'FilterButton',
  props: ['color', 'text', 'disabled'],
  setup: (props) => {
      return ({
          newClass: `border-2 rounded-2xl p-2 cursor-pointer hover:bg-purple-700 ${props.disabled ? 'border-gray-200 text-gray-200 opacity-60' : `border-${props.color}-400 text-${props.color}-400`}`
      })
  }
}
</script>

<style scoped>

</style>
