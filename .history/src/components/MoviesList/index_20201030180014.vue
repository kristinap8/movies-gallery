<template>
    <div>
       <!-- <movie-info v-for="movie in " -->
           <movie-info
        v-for="movie in getMoviesList"
        :key="movie.id"
        :id="movie.id"
        :name="movie.name"
        :image="movie.image"
        :year="movie.year"
        :genre="movie.genre"
        :country="movie.country"
        :actors="movie.actors"
        :duration="movie.duration"
        />
    </div>
</template>

<script>
import MovieInfo from "../MovieInfo"
    export default {
        name:"MoviesList",
        components:{
            MovieInfo
        }
    }
</script>

<style lang="scss" scoped>

</style>