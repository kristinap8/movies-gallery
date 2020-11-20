<template>
    <div>
        <b-button variant='light' size="lg">
       <router-link to="/all_movies">Перейти до списку фільмів</router-link>
       </b-button>
       <router-link to="/add_movie" tag='button'>Додати фільм</router-link>
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