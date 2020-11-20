<template>
    <div>
        all movies
        <movies-list/>
    </div>
</template>

<script>
import MoviesList from "../../components/MoviesList"
    export default {
        name:"AllMovies",
        components:{
            MoviesList
        }
    }
</script>

<style lang="scss" scoped>

</style>