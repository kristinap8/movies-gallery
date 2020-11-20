<template>
    <div>
        <div> {{getMovie.name}}</div>
       <div> <img :src="getMovie.image" alt="movie-image" /></div>
       <div> Жанр:{{getMovie.genre}}</div>
       <div> Рік:{{getMovie.year}}</div>
       <div> Тривалість:{{getMovie.duration}}</div>
       <div> Країна: {{getMovie.country}}</div>
       <div> Актори:{{getMovie.actors}}</div>
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
        }
        computed: {
            getMovie() {
                return this.$store.getters.getMovieById(this.movieId)
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>