import { createStore } from "vuex";

// Store (App wide data)
const state = {
  count: 0,
};

// mutation are operations that make the actual changes to the state (store), gets the state as the parameter

const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};

const actions = {
  incrementCount: ({ commit }) => commit("increment"),
  decrementCount: ({ commit }) => commit("decrement"),
};

// create an store instance by calling createStore, which Vuex instance gets initialized with

export default createStore({
  state,
  actions,
  mutations,
});
