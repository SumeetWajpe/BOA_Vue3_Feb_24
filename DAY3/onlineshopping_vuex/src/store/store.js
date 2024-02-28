import { createStore } from "vuex";
import axios from "axios";
// Store (App wide data)
const state = {
  products: [],
};

// mutation are operations that make the actual changes to the state (store), gets the state as the parameter

const mutations = {
  incrementLikes(state, payload) {
    // logic
    let index = state.products.findIndex(p => p.id == +payload);
    state.products[index].likes++;
  },
  setProducts(state, payload) {
    state.products = payload;
  },
};

const actions = {
  incrementLikes: ({ commit }, payload) => commit("incrementLikes", payload),
  async getProductsAsync({ commit }) {
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      commit("setProducts", data);
    } catch (error) {
      console.log(error);
    }
  },

  async deleteProduct() {
    // make async call axios - success -> commit('deleteProduct')
  },
};

// create an store instance by calling createStore, which Vuex instance gets initialized with

export default createStore({
  state,
  actions,
  mutations,
});
