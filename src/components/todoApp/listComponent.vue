<template>
  <div>
    <ul>
      <li v-for="(todo,index) in todoDatas" :key="todo">{{todo}}
        <a href="#" v-on:click="deleteTodo(index,todo)">제거</a>
      </li>
    </ul>
    <button v-on:click="clearBtn()">clear All</button>
  </div>
</template>

<script>
import eventBus from "./eventBus";
import viewData from "./data";
export default {
  name: "listComponent",
  data() {
    return {
      todoDatas: viewData
    };
  },
  created() {
    eventBus.$on("addTodo", inputVal => {
      if (localStorage[inputVal]) {
        alert("이미 입력값이 있습니다");
        return false;
      }
      localStorage.setItem(inputVal, inputVal);
      this.todoDatas.push(inputVal);
    });
  },
  methods: {
    deleteTodo(i, todo) {
      localStorage.removeItem(todo);
      this.todoDatas.splice(i, 1);
    },
    clearBtn(){
      localStorage.clear();
      this.todoDatas=[];
    }
  }
};
</script>

<style scope>
li {
  width: 100%;
}
li:after {
  display: block;
  clear: both;
  content: "";
}
a {
  display: block;
  float: right;
}
</style>
