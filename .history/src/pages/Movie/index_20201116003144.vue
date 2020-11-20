<template>
    <div>
      <b-button-group size="lg">
       <b-button to="/" variant="light">Головна сторінка</b-button>
       <b-button to="/all_movies" variant="light">Список фільмів</b-button>
       <b-button to="/add_movie" variant="light">Додати фільм</b-button>
       </b-button-group>
       <movie-details 
        :id="selectedMovie.id "
        :name="selectedMovie.name || undefined"
        :image="selectedMovie.image || undefined "
        :year="selectedMovie.year || undefined"
        :genre="selectedMovie.genre || undefined"
        :country="selectedMovie.country || undefined"
        :actors="selectedMovie.actors || undefined"
        :duration="selectedMovie.duration || undefined"
       />
    </div>
</template>

<script>
import MovieDetails from "../../components/MoviesList/MovieDetails"
    export default {
        name:"Movie",
        components: {
            MovieDetails,
        },
        computed: {
            selectedMovie() {
                return this.$store.getters.getMovieById(this.$route.params.movie_id)
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>