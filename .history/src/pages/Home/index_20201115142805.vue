<template>
   <div>
    <b-img src="https://images.newscientist.com/wp-content/uploads/2014/06/mg22229751.700-1_800.jpg?width=300" fluid alt="Responsive image"></b-img>
      <div class="col-md-12 text-center">
        <b-button-group vertical>
        <b-button variant='light' size="lg">
       <router-link to="/all_movies">Перейти до списку фільмів</router-link>
       </b-button>
       <b-button variant='light' size="lg">
       <router-link to="/add_movie">Додати фільм</router-link>
       </b-button>
        </b-button-group>
    </div>
   <div>
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