<template>
  <div id="app">
    <todoApp></todoApp> 
  </div>
</template>

<script>
import todoApp from './components/todoApp/todoApp'
export default {
  name: 'app',
  components:{
    'todoApp':todoApp
  }
}
</script>


<style>
*{margin:0;padding:0;}
li{list-style:none;}
</style>
