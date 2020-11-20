<template>
    <div class="bg">
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
 body, html {
    height: 100%;
  }
.bg{
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

}
</style>