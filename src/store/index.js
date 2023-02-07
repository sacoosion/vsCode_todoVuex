import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";
import todo from "./modules/todo";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  //   state: {
  //     // 데이터가 들어가는곳
  //     todos: [
  //       { id: 1, text: "buy a car", checked: false },
  //       { id: 2, text: "play game", checked: false },
  //     ],
  //     //users: [],
  //   },
  //   mutations: {
  //     // 데이터를 바꾸는것은 mutation여기서만 가능
  //     // SET_USERS(state, users) {
  //     //   state.users = users;
  //     // },
  //     ADD_TODO(state, value) {
  //       state.todos.push({
  //         id: Math.random(),
  //         text: value,
  //         checked: false,
  //       });
  //     },
  //     TOGGLE_TODO(state, { id, checked }) {
  //       const index = state.todos.findIndex((todo) => {
  //         return todo.id === id;
  //       });
  //       state.todos[index].checked = checked;
  //     },
  //     DELETE_TODO(state, todoId) {
  //       const index = state.todos.findIndex((todo) => {
  //         return todo.id === todoId;
  //       });
  //       state.todos.splice(index, 1);
  //     },
  //   },
  //   actions: {
  //     // 함수가 들어가는곳 , 비동기적 처리 , 메소드
  //     // getUsers({ commit }) {
  //     //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     //     commit("SET_USERS", res.data);
  //     //     //this.users = res.data;
  //     //   }); //비동기 작업
  //     // },
  //     // addTodo(context, value) {
  //     //   console.log(value);
  //     // },
  //     addTodo({ commit }, value) {
  //       setTimeout(function () {
  //         commit("ADD_TODO", value);
  //       }, 500);
  //     },
  //     toggleTodo({ commit }, payload) {
  //       //payload: 데이터를 payload라고 많이 함
  //       setTimeout(function () {
  //         commit("TOGGLE_TODO", payload);
  //       }, 500);
  //     },
  //     deleteTodo({ commit }, todoId) {
  //       setTimeout(function () {
  //         commit("DELETE_TODO", todoId);
  //       }, 500);
  //     },
  //   },
  //   getters: {
  //     // 뷰 components 안의 computed랑 비슷
  //     numberOfCompletedTodo: (state) => {
  //       return state.todos.filter((todo) => todo.checked).length;
  //     },
  //   },
  modules: {
    //todo: todo,  //이름 같으면 생략 가능
    todo,
    //user: user,  //이름 같으면 생략 가능
    user,
  },
});
