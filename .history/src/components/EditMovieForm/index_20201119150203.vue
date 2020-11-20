<template>
    <div>
        лалала
   {{movieToEdit.name}}
    </div>
</template>

<script>
    export default {
        name:"EditMovieForm",
        data() {
            return {
           name:movieToEdit.name,
           genre:movieToEdit.genre,
           year:movieToEdit.year,
           country:movieToEdit.country,
           actors:movieToEdit.actors,
           duration:movieToEdit.duration,
           image:movieToEdit.image,
           genres:[{ text: 'Виберіть жанр...', value: movieToEdit.genres },"Комедія","Детектив","Триллер","Жахи","Драма","Мультфільм","Бойовик","Фантастика"],
            }
        },
        computed: {
            movieToEdit() {
                return this.$store.getters.getMovieById(this.$route.params.movie_id)
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>