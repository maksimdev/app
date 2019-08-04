import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    movies: []
  },

  getters: {
    countOfFilms: function(state) {
      return state.movies.length;
    },
    MOVIES: state => {
      return state.movies;
    }
  },

  mutations: {
    SET_MOVIES: (state, payload) => {
      state.movies = payload;
    }
  },

  actions: {
    GET_MOVIES: async context => {
      let { data } = await Axios.get(
        "http://react-cdp-api.herokuapp.com/movies"
      );
      context.commit("SET_MOVIES", data.data);
    },
    SEARCH_MOVIES: async (context, payload) => {
      let { data } = await Axios.get(
        `http://react-cdp-api.herokuapp.com/movies?search=${payload.queryString}&searchBy=${payload.searchBy}`
      );
      context.commit("SET_MOVIES", data.data);
    }
  }
});
