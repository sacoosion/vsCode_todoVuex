<template>
  <div>
    <TodoEl
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoEl from "@/components/TodoEl.vue";
export default {
  components: {
    TodoEl,
  },
  computed: {
    todos() {
      //return this.$store.state.todos;
      return this.$store.state.todo.todos;
    },
  },
  methods: {
    toggleCheckbox(value) {
      this.$emit("toggle-checkbox", value);
    },
    deleteTodo(todoId) {
      this.$emit("click-delete", todoId);
    },
  },
};
</script>

<style></style>
