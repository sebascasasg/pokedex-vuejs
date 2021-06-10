<template>
  <div class="popup-container">
    <div class="background"></div>
    <pokemon-card class="card" :info="pokemonInfo" :favstate="stateFavoriteList.includes(pokemonInfo.pokemon_name)" @click-close="closePopup" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PokemonCard from '@/components/ui/PokemonCard.vue'
export default {
  components: { PokemonCard },
  emits: ['close-popup'],
  props: {
    pokemonInfo: {
      type: Object,
    },
  },
  computed: {
    ...mapState(['stateFavoriteList']),
  },
  methods: {
    closePopup() {
      this.$emit('close-popup')
    },
  },
}
</script>

<style scoped>
.popup-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 200;
}
.background {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
