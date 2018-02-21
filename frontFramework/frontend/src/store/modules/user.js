// References - https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/store/modules/cart.js

import axios from 'axios'

// initial state
const state = {
  users: []
}

// getters
const getters = {
  users: state => state.users,
  userIds: (state, getters) => {
    return getters.users ? getters.users.map(user => user.login) : null
  }
}

// mutations
const mutations = {
  setUsers (state, users) {
    state.users = users
  }
}

// actions
const actions = {
  addUsers ({ commit, state }, users) {
    axios.get('https://api.github.com/users').then(users => {
      commit('setUsers', users.data)
      return true
    }, err => {
      console.log(err)
    })
    commit('setUsers', null)
    return false
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
