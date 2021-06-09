<template>
  <div class="flex-container">
    <img :src="require('@/assets/images/loader.svg')" alt="Pokéball" class="pokeball-img" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.flex-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pokeball-img {
  width: 106px;
}
</style>
