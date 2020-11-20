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