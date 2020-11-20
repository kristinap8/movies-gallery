<template>
    <div>
        {{getMovie}}
       <div>{{movieId}}</div>
       <div> {{genre}}</div>
       <div> <img :src="image" alt="movie-image" /></div>
       <div> Жанр:{{genre}}</div>
       <div> Рік:{{year}}</div>
       <div> Тривалість:{{duration}}</div>
       <div> Країна: {{country}}</div>
       <div> Актори:{{actors}}</div>
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
        computed: {
            getMovie() {
                return this.$store.getters.getMovieById(this.movieId)
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>