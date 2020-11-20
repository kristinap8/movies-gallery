<template>
    <div>

    </div>
</template>

<script>
    export default {
        name:"EditMovieForm",
        props: {
            id: {
                type: [Number,String],
                required:true
            },
        },
        computed: {
            movieToEdit() {
                return this.$store.getters.getMovieById()
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>