<template>
    <div>
     <b-button-group>
      <b-button>Button 1</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
        <movies-list/>
    </div>
</template>

<script>
import MoviesList from "../../components/MoviesList"
    export default {
        name:"AllMovies",
        components:{
            MoviesList
        }
    }
</script>

<style lang="scss">

</style>