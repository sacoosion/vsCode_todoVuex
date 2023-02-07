import axios from "axios";

export default {
  namespaced: true,

  state: {
    users: [],
  },

  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },

  actions: {
    getUsers({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        commit("SET_USERS", res.data);
        //this.users = res.data;
      }); //비동기 작업
    },
  },
};
