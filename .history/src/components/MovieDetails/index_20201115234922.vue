<template>
    <div>
        <b-card class="mx-auto"
        :title='selectedMovie.name'
        :img-src='selectedMovie.image'
        img-alt="movie-image"
        style="max-width: 19rem;"
        img-top
        >
        <b-card-text>
            Жанр:{{getMovie.genre}}<br/>
            Рік:{{getMovie.year}}<br/>
            Країна:{{getMovie.country}}<br/>
            Актори:{{getMovie.actors}}<br/>
            Тривалість фільму:{{getMovie.duration}} хв
        </b-card-text>
        </b-card>
      </div>
</template>

<script>
    export default {
        name:"MovieDetails",
        props: {
             selectedMovie: {
                type: Object,
                required:true
         },
        },
       
        
    }
</script>

<style lang="scss" scoped>

</style>