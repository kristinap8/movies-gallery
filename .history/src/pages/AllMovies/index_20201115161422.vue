<template>
    <div>
     <b-button-group>
      <b-button>Назад</b-button>
      <b-button></b-button>
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