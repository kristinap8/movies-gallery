<template>
<div>
    <b-card img-src="../../assets/images/movie-logo.jpg" img-alt="Image" img-left>
      <b-card-text>
      {{count}}
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
