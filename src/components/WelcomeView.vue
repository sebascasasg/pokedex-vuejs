<template>
  <div class="flex-container">
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
    <app-button @click="handleButtonClick" class="button">Get started</app-button>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue'
export default {
  components: {
    AppButton,
  },
  methods: {
    handleButtonClick() {
      console.log('Click en el botón')
    },
  },
}
</script>

<style scoped>
.flex-container {
  margin: 70px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-container {
  width: 325px;
  max-width: 100%;
  margin-bottom: 60px;
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
  color: var(--black);
}
.intro {
  width: 315px;
  margin-bottom: 50px;
  font-size: 18px;
  line-height: 27px;
  color: var(--dark-grey);
  text-align: center;
}
.button:hover,
.button:focus {
  background-color: var(--dark-red);
}

@media only screen and (min-width: 768px) {
  .intro {
    width: 560px;
  }
  .flex-container {
    margin: 0;
    position: relative;
    top: 50vh;
    transform: translateY(-50%);
  }
}
</style>
