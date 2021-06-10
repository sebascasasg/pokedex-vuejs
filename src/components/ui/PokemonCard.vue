<template>
  <div class="card-container">
    <div class="img-container">
      <img :src="info.sprites.other['official-artwork'].front_default" :alt="info.pokemon_name" class="pokemon-img" />
    </div>
    <div class="info-container">
      <div class="data-container">
        <span class="primary-bold data-text">Name: </span><span class="primary-regular data-text">{{ info.pokemon_name }}</span>
      </div>
      <div class="data-container">
        <span class="primary-bold data-text">Weight: </span><span class="primary-regular data-text">{{ info.weight }}</span>
      </div>
      <div class="data-container">
        <span class="primary-bold data-text">Height: </span><span class="primary-regular data-text">{{ info.height }}</span>
      </div>
      <div class="data-container">
        <span class="primary-bold data-text">Types: </span><span class="primary-regular data-text">{{ getPokemonTypes(info.types) }}</span>
      </div>
    </div>
    <div class="share-container">
      <app-button @click="copyToClipboard" class="button">Share to my friends</app-button>
      <div class="favstar-container">
        <img :src="require('@/assets/images/star-circle.svg')" alt="" class="star-base" />
        <img :src="require('@/assets/images/normal-star.svg')" alt="" class="star" />
      </div>
    </div>
    <img :src="require('@/assets/images/close-button.svg')" alt="" class="close-button" @click="handleCloseClick" />
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue'
export default {
  components: {
    AppButton,
  },
  emits: ['click-close'],
  props: {
    info: {
      type: Object,
    },
  },
  methods: {
    getPokemonTypes(typesList) {
      return typesList.map(type => type.type.name).join(', ')
    },
    handleCloseClick() {
      this.$emit('click-close')
    },
    copyToClipboard() {
      navigator.clipboard
        .writeText(`Name: ${this.info.pokemon_name}, Weight: ${this.info.weight}, Height: ${this.info.height}, Types: ${this.getPokemonTypes(this.info.types)}`)
        .then(() => console.log('Texto copiado al portapapeles'))
        .catch(error => console.error(error))
    },
  },
}
</script>

<style scoped>
.card-container {
  width: 315px;
  background: var(--white);
  border-radius: 5px;
  overflow: hidden;
}
.img-container {
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: brown;
  background-image: url('~@/assets/images/pokemon-background.jpg');
  background-position: -160px;
}
.pokemon-img {
  width: 180px;
}
.info-container {
  padding: 15px 30px 0;
}
.data-container {
  padding: 10px 0;
  border-bottom: 1px solid var(--light-grey);
}
.data-text {
  font-size: 18px;
  line-height: 27px;
  text-transform: capitalize;
  color: var(--dark-grey);
}
.share-container {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.favstar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.star {
  position: absolute;
}
.close-button {
  position: fixed;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
.button:hover {
  background-color: var(--dark-red);
}
@media only screen and (min-width: 768px) {
  .card-container {
    width: 570px;
  }
}
</style>
