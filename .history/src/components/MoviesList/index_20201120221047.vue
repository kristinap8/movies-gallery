<template>
    <div>
        <b-row class="justify-content-md-center">
         <b-col sm="3">
        <b-form-input v-model="search" size="lg" placeholder="Знайти..."></b-form-input>
        </b-col>
        </b-row>
        <br/>
        <b-card-group deck>
         <movie-info
        v-for="movie in filteredMovies"
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
        data() {
            return {
                search: ''
            }
        },
        components:{
            MovieInfo
        },
        computed: {
       ...mapGetters(['getMovies']),
       filteredMovies(){
           return this.getMovies.filter(movie=>{return movie.name.toLowerCase().includes(this.search.toLowerCase())})
       }
  },
    }
</script>

<style lang="scss" scoped>

</style>