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
            Жанр:{{selectedMovie.genre}}<br/>
            Рік:{{selectedMovie.year}}<br/>
            Країна:{selectedMovie.country}}<br/>
            Актори:{{selectedMovie.actors}}<br/>
            Тривалість фільму:{{selectedMovie.duration}} хв
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