<template>
  <search-layout class="layout">
    <pokemon-list class="list" />
  </search-layout>
</template>

<script>
import SearchLayout from '@/components/layouts/SearchLayout.vue'
import PokemonList from '@/components/ui/PokemonList.vue'
export default {
  components: {
    SearchLayout,
    PokemonList,
  },
}
</script>

<style scoped>
.layout {
  margin: 125px 0 100px;
}
.list {
  padding: 0 30px;
}
@media only screen and (min-width: 768px) {
  .list {
    width: 570px;
    margin: auto;
    padding: 0;
  }
}
</style>
