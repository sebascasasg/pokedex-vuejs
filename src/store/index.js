import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      stateFavoriteList: [],
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
  plugins: [createPersistedState()],
})

export default store
