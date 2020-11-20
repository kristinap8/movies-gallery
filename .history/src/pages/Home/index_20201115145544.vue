<template>
<div>
   <div class="col-md-12 text-center">
       <img src="../../assets/images/logo.jpg">
        <b-button-group vertical>
        <b-button variant='light' size="lg">
       <router-link to="/all_movies">Перейти до списку фільмів</router-link>
       </b-button>
       <b-button variant='light' size="lg">
       <router-link to="/add_movie">Додати фільм</router-link>
       </b-button>
       </b-button-group>
    </div>
</div>
</template>

<script>
 export default {
        name:"Home",
        components:{
           
        }
    }
</script>

<style lang="scss" scoped>
</style>
