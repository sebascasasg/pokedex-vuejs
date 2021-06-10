<template>
  <div class="loading-container">
    <img :src="require('@/assets/images/loader.svg')" alt="Pokéball" class="pokeball-img" />
  </div>
</template>

<style scoped>
.loading-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pokeball-img {
  width: 106px;
  animation: pokeball-animation 2s infinite linear;
}

@keyframes pokeball-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
