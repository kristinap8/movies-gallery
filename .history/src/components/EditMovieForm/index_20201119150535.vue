<template>
    <div>
        лалала
       {{movieToEdit.id}}
    </div>
</template>

<script>
    export default {
        name:"EditMovieForm",
        computed: {
            movieToEdit() {
                movie=this.$store.getters.getMovieById(this.$route.params.movie_id)
                 return movie
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>