<template>
  <button class="button primary-bold">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Click me!',
    },
  },
}
</script>

<style scoped>
.button {
  padding: 11px 20px;
  background-color: var(--red);
  color: var(--white);
  font-size: 18px;
  border: none;
  border-radius: 60px;
  cursor: pointer;
}
.button:hover,
.button:focus {
  background-color: var(--dark-red);
}
</style>
