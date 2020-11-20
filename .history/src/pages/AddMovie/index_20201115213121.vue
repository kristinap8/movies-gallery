<template>
    <div>
       <add-movie-form>
        <b-button-group size="lg">
       <b-button to="/" variant="light">Головна сторінка</b-button>
       <b-button to="/all_movies" variant="light">Список фільмів</b-button>
       </b-button-group>
       </add-movie-form>
    </div>
</template>

<script>
import AddMovieForm from "../../components/AddMovieForm"
    export default {
        name:"AddMovie",
        components: {
            AddMovieForm,
        },
    }
</script>

<style lang="scss" scoped>

</style>