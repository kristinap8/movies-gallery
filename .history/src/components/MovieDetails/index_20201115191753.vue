<template>
    <div>
        <b-card
        :title='getMovie.name'
        :img-src='getMovie.image'
        img-alt="movie-image"
        style="max-width: 20rem;"
        img-top
        >
        <b-card-text>
           <div> Жанр:{{getMovie.genre}}</div>
            Рік:{{getMovie.year}}
            Країна:{{getMovie.country}}
            Актори:{{getMovie.actors}}
            Тривалість фільму:{{getMovie.duration}}
        </b-card-text>
        </b-card>
      </div>
</template>

<script>
    export default {
        name:"MovieDetails",
        props: {
             movieId: {
                type: [String,Number],
                required:true
         },
        },
        computed: {
            getMovie() {
                return this.$store.getters.getMovieById(this.movieId)
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>