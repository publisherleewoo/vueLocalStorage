<template>
    <div>
        <input type="text" v-model="inputVal" v-on:keydown.enter="addTodo()">
        <button v-on:click="addTodo()">추가</button>
    </div>
</template>

<script>
import eventBus from "./eventBus";
export default {
  name: "inputComponent",
  data() {
    return { inputVal: "" };
  },
  methods: {
    addTodo() {
      if (this.inputVal === "") {
        return false;
      }
      this.inputVal = this.inputVal.trim();
      eventBus.$emit("addTodo", this.inputVal);
      this.inputVal = "";
    }
  }
};
</script>