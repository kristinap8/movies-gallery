<template>
<div>
    <b-card img-src="../../assets/images/movie-logo.jpg" img-alt="Image" img-left>
      <b-card-text>
     <h4> Кількість фільмів: {{count}}</h4>
    <b-button-group vertical size="lg" variant="light">
    <b-button>
        <router-link to="/all_movies">Перейти до списку фільмів</router-link>
    </b-button>
    <b-button>
        <router-link to="/add_movie">Додати фільм</router-link>
    </b-button>
    </b-button-group>
      </b-card-text>
    </b-card>
</div>
</template>

<script>
 export default {
        name:"Home",
        components:{
           
        },
        data() {
            return {
                count: 20
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>
