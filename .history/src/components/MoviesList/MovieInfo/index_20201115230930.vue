<template>
    <div>
    <b-card
    :title='name'
    :img-src='image'
    img-alt="movie-image"
    style="max-width: 12rem;"
    img-top
    >
    <b-card-text>
        Жанр:{{genre}}
     </b-card-text>
    <b-button variant="light" @click="goToDetails">Детальніше</b-button>
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
                default:"-"
            },
            image:{
                type:String,
                default:require('@/assets/images/movie-logo.jpg')
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
                default:"-"
            }

        },
        methods: {
            goToDetails() {
                this.$router.push({
                    name:'movie',
                    params:{movie_id:this.id}
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>