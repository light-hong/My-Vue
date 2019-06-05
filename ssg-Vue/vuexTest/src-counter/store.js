/*
vuex的核心管理对象模块
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象
const state = {
  count: 0,
}

// 包含多个更新state函数的对象
const mutations = {
  // eslint-disable-next-line no-shadow
  INCREMENT(state) {
    state.count += 1
  },
  // eslint-disable-next-line no-shadow
  DECREMENT(state) {
    state.count -= 1
  },
}

// 包含对个对应事件回调函数的对象
const actions = {
  increment({ commit }) {
    commit('INCREMENT')
  },
  decrement({ commit }) {
    commit('DECREMENT')
  },
  // eslint-disable-next-line no-shadow
  incrementIfOdd({ commit, state }) {
    if (state.count % 2 === 0) {
      commit('INCREMENT')
    }
  },
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  },
}

// 包含多个getter计算属性函数的对象
const getters = {
  // eslint-disable-next-line no-shadow
  evenOrOdd(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  },
}

export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新state函数的对象
  actions, // 包含对个对应事件回调函数的对象
  getters, // 包含多个getter计算属性函数的对象
})
