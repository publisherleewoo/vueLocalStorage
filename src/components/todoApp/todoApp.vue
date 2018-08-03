<template>
    <section>
        <h1>todoApp</h1>
        <inputComponent/>
        <listComponent/>
    </section>
</template>

<script>
import inputComponent from "./inputComponent";
import listComponent from "./listComponent";

//모든것을 이곳에서 핸들링하게끔.
export default {
  name: "todoApp",
  components: {
    inputComponent,
    listComponent
  }
};
</script>

<style>
section {
  width: 500px;
  margin: 0 auto;
}
</style>
