import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: null,
    mode: "normal", //can take snake and uppercase
  },
  mutations: {
    add_joke(state, payload) {
      state.joke = payload;
    },
    change_mode(state, payload) {
      state.mode = payload;
    }
  },
  actions: {
   get_joke(context) {
     
      axios.get("https://geek-jokes.sameerkumar.website/api?format=json").then((response) => {
       
        context.commit('add_joke', response.data.joke);

      }).catch(console.error)

      
    },
    set_uppermode(context) {
      context.commit('change_mode', "uppercase")
    },
    set_snake(context) {
      context.commit('change_mode', "snake")
    },
    set_normal(context) {
      context.commit('change_mode', "normal")
    }
  },

})
