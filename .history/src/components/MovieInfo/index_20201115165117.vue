<template>
    <div>
    <b-card
    :title='name'
    :img-src='image'
    img-alt="movie-image"
    style="max-width: 5rem;"
    >
    <b-card-text>
        Жанр:{{genre}}
     </b-card-text>
    <b-button href="#" variant="light">Детальніше</b-button>
  </b-card>
    </div>
</template>

<script>

    export default {
        name:"MovieInfo",
        props: {
            id: {
                type: [String,Number],
                required:true,
            },
            name:{
                type:String,
                required:true
            },
            image:{
                type:String,
                default:require('../../assets/images/movie-logo.jpg')
            },
            genre:{
                type:String,
                default:"Жанр не вказаний"
            },
            year:{
                type:[String,Number],
                default:"Немає року випуску"
            },
            country:{
                type:String,
                default:"Рік невідомий"
            },
            actors:{
                type:String,
                default:""
            },
            duration:{
                type:[String,Number],
                default:"Тривалість даного фільму невідома"
            }

        },
    }
</script>

<style lang="scss" scoped>

</style>