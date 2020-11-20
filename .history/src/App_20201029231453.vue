<template>
  <div id="app">
    <movies-list title="Lovers" :image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaZ1JMDsCvFaowUQKz6TLrIiJHqpilkDsDEg&usqp=CAU"
    year=2001>
    </movies-list>
    
  </div>
</template>

<script>
import MoviesList from "./components/MoviesList"

export default {
  name: 'App',
  components: {
    MoviesList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
