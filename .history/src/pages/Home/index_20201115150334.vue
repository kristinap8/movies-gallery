<template>
<div>
    <b-card title="Кількість фільмів: {{count}}" img-src="../../assets/images/movie-logo.jpg" img-alt="Image" img-left>

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
