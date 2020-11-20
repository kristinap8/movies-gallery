<template>
    <div>
        {{name}}
        <img :src="image" alt="movie-image" />
        {{year}}
    </div>
</template>

<script>
    export default {
        name:"MoviesList",
        props: {
            id: {
                type: [String,Number],
                required:true,
            },
            name:{
                type:String,
                default:"Назва відсутня",
            },
            image:{
                type:String,
                default:require("@/assets/images/no-image-logo.jpg")
            },
            year:{
                type:[String,Number],
                default:"Немає року випуску"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>