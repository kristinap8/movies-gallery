<template>
    <div>
        {}
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
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>