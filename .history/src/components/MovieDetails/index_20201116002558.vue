<template>
    <div>
        <b-card class="mx-auto"
        :title='name'
        img-alt="movie-image"
        style="max-width: 19rem;"
        img-top
        >
        <b-card-text>
         </b-card-text>
        </b-card>
      </div>
</template>

<script>
    export default {
        name:"MovieDetails",
        props: {
              id: {
                type: [String,Number],
                required:true,
            },
            name:{
                type:String,
                default:"Назва не вказана"
            },
            image:{
                type:String,
                default:require('@/assets/images/no-image.png'),
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
                default:"Акторів не вказано"
            },
            duration:{
                type:[String,Number],
                default:0
            }
         },
        },
       
        
    }
</script>

<style lang="scss" scoped>

</style>