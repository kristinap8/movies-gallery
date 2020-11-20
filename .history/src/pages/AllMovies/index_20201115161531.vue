<template>
    <div>
     <b-button-group size="lg">
      <b-button to="/" variant="light">Назад</b-button>
      <b-button to="/add_movie" variant="light">Додати фільм</b-button>
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