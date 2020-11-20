<template>
    <div>
        <b-card-group deck>
         <movie-info
        v-for="movie in getMovies"
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
        </b-card-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieInfo from "./MovieInfo"
    export default {
        name:"MoviesList",
        components:{
            MovieInfo
        },
        computed: {
       ...mapGetters(['getMovies']),
  },
    }
</script>

<style lang="scss" scoped>

</style>