<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="
      mr-2
      text-white
      border-2
      rounded-2xl
      p-2
      border-white
      cursor-pointer
      hover:bg-purple-700
      bg-transparent
      hhh
    "
    placeholder="Filter by text, authors."
  />
</template>

<script>
export default {
  name: "FilterInput",
  props: ["modelValue"],
};
</script>

<style scoped>
.hhh {
  max-height: 38px;
}
</style>
