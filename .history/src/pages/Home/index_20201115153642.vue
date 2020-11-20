<template>
<div>
    <b-card img-src="../../assets/images/movie-logo.jpg" img-alt="Image" img-left>
      <b-card-text>
       <b-button-group vertical size="lg">
        <b-button variant="light" to="/all_movies">
        Перейти до списку фільмів
      </b-button>
      <b-button variant="light" to="/add_movie">
        Додати фільм
      </b-button>
     </b-button-group>
     <b-alert variant="light" show>Кількість наявних фільмів : {{count}}</b-alert>
     </b-card-text>
    </b-card>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
 export default {
        name:"Home",
        components:{
           
        },
        computed: {
           ...mapGetters(['getMoviesCount'])
        },
    }
</script>

<style lang="scss" scoped>
</style>
