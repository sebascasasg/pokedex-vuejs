<template>
  <div class="search-container">
    <search-layout class="layout" v-if="!isLoading" :all-active="allListActive" @button-click="toggleListView">
      <pokemon-list class="list" :pokemons="pokemons" @select-pokemon="showPokemonInfo" />
    </search-layout>
    <loading-view v-else />
    <app-popup v-if="popupVisibility" :pokemon-info="pokemonInfo" @close-popup="hidePopup" />
  </div>
</template>

<script>
import SearchLayout from '@/components/layouts/SearchLayout.vue'
import PokemonList from '@/components/ui/PokemonList.vue'
import AppPopup from '@/components/ui/AppPopup.vue'
import LoadingView from '@/components/LoadingView.vue'
export default {
  components: {
    SearchLayout,
    PokemonList,
    AppPopup,
    LoadingView,
  },
  data() {
    return {
      pokemons: [],
      fetchedData: [],
      pokemonInfo: null,
      isLoading: true,
      popupVisibility: false,
      allListActive: true,
      favorites: ['pikachu', 'charizard', 'bulbasaur'],
    }
  },
  methods: {
    showPokemonInfo(name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(result => result.json())
        .then(data => {
          this.pokemonInfo = { ...data, pokemon_name: name }
          this.popupVisibility = true
        })
    },
    hidePopup() {
      this.popupVisibility = false
    },
    toggleListView(list) {
      if (list === 'all') {
        this.pokemons = this.fetchedData
      } else if (list === 'fav') {
        this.pokemons = this.favorites
      }
    },
  },
  created() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(result => result.json())
      .then(data => {
        this.fetchedData = data.results.map(res => res.name)
        this.pokemons = this.fetchedData
        this.isLoading = false
      })
  },
}
</script>

<style scoped>
.search-container {
  min-height: 100vh;
  position: relative;
}
.layout {
  padding: 125px 0 100px;
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
