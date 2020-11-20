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
                return this.$store.getters.getMovieById(this.$route.params.movie_id)
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>