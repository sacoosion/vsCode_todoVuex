<template>
  <div>
    User List
    <!-- <div v-for="user in users" :key="user.id"> -->
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  //   data() {
  //     return {
  //       users: [],
  //     };
  //   },
  created() {
    this.getUsers();
    // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //  this.users = res.data;
    //}); //비동기 작업
    // const a = 1;
    // console.log(a);
  },
  computed: {
    ...mapState("user", ["users"]),
    // ...mapState("user", {
    //   users: (state) => state.users,
    // }),
    // ...mapState({
    //   users: (state) => state.user.users,
    // }),
    //...mapState(['users'])
    // ...mapState({
    //   people: "users"
    // }),
    //...mapState(["users"]),
    // users() {
    //   return this.$store.state.users;
    // },
    // todos(){
    //     return this.$store.state.todos;
    // }
  },
  methods: {
    ...mapActions("user", ["getUsers"]),
    //...mapActions(["getUsers"]),
    // getUsers() {
    //   this.$store.dispatch("getUsers");
    //   //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //   //     this.users = res.data;
    //   //   }); //비동기 작업
    // },
  },
};
</script>

<style></style>
