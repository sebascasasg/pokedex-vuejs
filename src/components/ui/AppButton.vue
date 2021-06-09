<template>
  <button class="button primary-bold">
    <slot />
  </button>
</template>

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
</style>
