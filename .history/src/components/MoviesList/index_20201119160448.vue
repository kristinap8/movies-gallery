<template>
    <div>
        <b-col sm="3">
        <b-form-input v-model="search" size="lg" label-align-sm="right" placeholder="Знайти..."></b-form-input>
        </b-col>
        <b-card-group deck>
         <movie-info
        v-for="movie in getMovies"
        :key="movie.id"
        :id="movie.id"
        :name="movie.name || undefined"
        :image="movie.image ||undefined "
        :year="movie.year"
        :genre="movie.genre ||undefined"
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