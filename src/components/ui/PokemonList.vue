<template>
  <ul class="list">
    <pokemon-item class="item" v-for="pokemon in pokemons" :key="pokemon" :name="pokemon" :favstate="stateFavoriteList.includes(pokemon)" @click-item="selectItem" />
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import PokemonItem from '@/components/ui/PokemonItem.vue'
export default {
  components: { PokemonItem },
  emits: ['select-pokemon'],
  props: {
    pokemons: {
      type: Array,
    },
  },
  computed: {
    ...mapState(['stateFavoriteList']),
  },
  methods: {
    selectItem(name) {
      this.$emit('select-pokemon', name)
    },
  },
}
</script>

<style scoped>
.item {
  margin-bottom: 10px;
}
</style>
