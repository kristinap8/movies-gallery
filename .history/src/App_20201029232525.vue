<template>
  <div id="app">
    <movie-info name="Lovers" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaZ1JMDsCvFaowUQKz6TLrIiJHqpilkDsDEg&usqp=CAU"
    year=2001>
    </movie-ifo>
    
  </div>
</template>

<script>
import MovieInfo from "./components/MovieInfo"

export default {
  name: 'App',
  components: {
    MovieInfo
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
