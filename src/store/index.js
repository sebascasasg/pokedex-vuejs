import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      stateFavoriteList: ['pikachu'],
    }
  },
  actions: {
    setFavoriteList(context, payload) {
      context.commit('setFavoriteList', payload)
    },
    addFavoritePokemon(context, payload) {
      context.commit('addFavoritePokemon', payload)
    },
    removeFavoritePokemon(context, payload) {
      context.commit('removeFavoritePokemon', payload)
    },
  },
  mutations: {
    setFavoriteList(state, list) {
      state.stateFavoriteList = list
    },
    addFavoritePokemon(state, name) {
      state.stateFavoriteList.push(name)
    },
    removeFavoritePokemon(state, name) {
      let index = state.stateFavoriteList.indexOf(name)
      state.stateFavoriteList.splice(index, 1)
    },
  },
})

export default store
