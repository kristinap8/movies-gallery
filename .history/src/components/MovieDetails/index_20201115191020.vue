<template>
    <div>
        {{getMovie.genre}}
    
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