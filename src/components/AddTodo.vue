<template>
  <div>
    <input
      v-model="todoText"
      type="text"
      class="w-100 p-2"
      placeholder="Type todo"
      @keyup.enter="addTodo"
    />
  </div>
</template>
<script>
//import { type } from "os";
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    addTodo(e) {
      //this.$store.commit("ADD_TODO", e.target.value);
      //commit( type: 'ADD_TODO', e.target.value);
      //this.$emit("add-todo", e.target.value);
      //this.$store.dispatch("addTodo", e.target.value);
      this.$store.dispatch("todo/addTodo", e.target.value);
      this.todoText = "";
    },
  },
};
</script>
<style></style>
