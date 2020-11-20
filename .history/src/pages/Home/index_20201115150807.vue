<template>
<div>
    <b-card img-src="../../assets/images/movie-logo.jpg" img-alt="Image" img-left>
      <b-card-text>
     <h4> Кількість фільмів: {{count}}</h4>
    <b-button-group vertical>
    <b-button>Top</b-button>
    <b-button>Middle</b-button>
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
