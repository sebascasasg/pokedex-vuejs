<template>
  <div class="img-container">
    <img :src="require('@/assets/images/red-circle.svg')" alt="" class="circle-img" />
    <img :src="require('@/assets/images/pikachu.svg')" alt="Happy pikachu" class="pikachu-img" />
  </div>
  <h1 class="primary-bold title">
    Welcome to Pokédex
  </h1>
  <p class="primary-regular intro">
    The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
  </p>
</template>

<script>
export default {}
</script>

<style scoped>
.img-container {
  width: 325px;
  max-width: 100%;
  margin: 0 auto 60px;
  position: relative;
}
.pikachu-img {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  position: relative;
}
.circle-img {
  width: 63%;
  position: absolute;
  top: 24.9%;
  left: 15.3%;
}
.title {
  margin-bottom: 30px;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
}
.intro {
  font-size: 18px;
  line-height: 27px;
  color: var(--dark-grey);
  text-align: center;
  margin-bottom: 50px;
}
</style>
