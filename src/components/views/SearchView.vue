<template>
  <div class="search-container">
    <search-layout class="layout" v-if="!isLoading" :all-active="allListActive" @button-click="toggleListView" @change-search="searchByTerm">
      <pokemon-list v-if="succesfulSearch" class="list" :pokemons="pokemons" @select-pokemon="showPokemonInfo" :key="componentKey" />
      <error-view v-else @click-button="backToHome" />
    </search-layout>
    <loading-view v-else />
    <app-popup v-if="popupVisibility" :pokemon-info="pokemonInfo" @close-popup="hidePopup" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ErrorView from '@/components/views/ErrorView.vue'
import SearchLayout from '@/components/layouts/SearchLayout.vue'
import PokemonList from '@/components/ui/PokemonList.vue'
import AppPopup from '@/components/ui/AppPopup.vue'
import LoadingView from '@/components/views/LoadingView.vue'

export default {
  components: {
    SearchLayout,
    PokemonList,
    AppPopup,
    LoadingView,
    ErrorView,
  },
  emits: ['change-view'],
  computed: {
    ...mapState(['stateFavoriteList']),
  },
  data() {
    return {
      pokemons: [],
      fetchedData: [],
      pokemonInfo: null,
      isLoading: true,
      popupVisibility: false,
      allListActive: true,
      componentKey: true,
      succesfulSearch: true,
      searchTerm: '',
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
      if (this.allListActive) {
        this.pokemons = this.fetchedData
        this.componentKey = !this.componentKey
      } else {
        this.pokemons = this.stateFavoriteList
      }
      this.popupVisibility = false
    },
    toggleListView(list) {
      if (list === 'all') {
        this.allListActive = true
        this.searchByTerm(this.searchTerm)
      } else if (list === 'fav') {
        this.allListActive = false
        this.searchByTerm(this.searchTerm)
      }
    },
    searchByTerm(search) {
      if (this.allListActive) {
        this.pokemons = this.fetchedData.filter(pokemon => {
          return pokemon.match(search)
        })
      } else {
        this.pokemons = this.stateFavoriteList.filter(pokemon => {
          return pokemon.match(search)
        })
      }
      this.searchTerm = search
      this.succesfulSearch = this.pokemons.length
    },
    backToHome() {
      this.$emit('change-view')
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
