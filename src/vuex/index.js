import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  countryData: null,
  shops: null
}

const mutations = {
  setCountryData (state, data) {
    state.countryData = data
  },
  setShops (state, data) {
    state.shops = data
  }
}

const getters = {
  countryData (state) {
    return state.countryData
  },
  shops (state) {
    return state.shops
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
