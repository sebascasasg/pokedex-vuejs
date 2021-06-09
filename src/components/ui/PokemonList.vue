<template>
  <ul class="list">
    <pokemon-item class="item" v-for="pokemon in pokelist" :key="pokemon" :name="pokemon" />
    <pokemon-item class="item" v-for="pokemon in pokelist" :key="pokemon" :name="pokemon" />
    <pokemon-item class="item" v-for="pokemon in pokelist" :key="pokemon" :name="pokemon" />
    <pokemon-item class="item" v-for="pokemon in pokelist" :key="pokemon" :name="pokemon" />
    <pokemon-item class="item" v-for="pokemon in pokelist" :key="pokemon" :name="pokemon" />
  </ul>
</template>

<script>
import PokemonItem from '@/components/ui/PokemonItem.vue'
export default {
  components: { PokemonItem },

  data() {
    return {
      pokelist: ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard'],
    }
  },
}
</script>

<style scoped>
.item {
  margin-bottom: 10px;
}
</style>
