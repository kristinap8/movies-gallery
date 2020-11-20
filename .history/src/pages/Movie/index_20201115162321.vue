<template>
    <div>
      <b-button-group size="lg">
       <b-button to="/" variant="light">Головна сторінка</b-button>
       <b-button to="/all_movies" variant="light">Список фільмів</b-button>
       <b-button to="/add_movie" variant="light">Додати фільм</b-button>
       </b-button-group>
    </div>
</template>

<script>
    export default {
        name:"Movie"
    }
</script>

<style lang="scss" scoped>

</style>