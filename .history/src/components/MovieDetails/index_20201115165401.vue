<template>
    <div>
       <div> {{name}}</div>
       <div> <img :src="image" alt="movie-image" /></div>
       <div> Жанр:{{genre}}</div>
       <div> Рік:{{year}}</div>
       <div> Тривалість:{{duration}}</div>
       <div> Країна: {{country}}</div>
       <div> Актори:{{actors}}</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>