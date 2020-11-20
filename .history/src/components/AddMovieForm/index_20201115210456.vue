<template>
    <div class="fixed-top d-flex align-items-center justify-content-center"
    style="bottom: 0; overflow-y: auto">
        <b-form style="max-width:800px;">
        <b-form-group label="Назва фільму:">
        <b-form-input
          v-model="name"
          placeholder="Введіть назву фільму..."
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Картинка:">
        <b-form-input 
          v-model="image"
          placeholder="Введіть url картинки..."
        ></b-form-input>
      </b-form-group>
       <b-form-group label="Жанр:">
        <b-form-input
          v-model="genre"
         ></b-form-input>
      </b-form-group>
      <b-form-group label="Рік:">
        <b-form-input
          v-model="year"
          type="range"
          min="1800"
          max="2020"
           ></b-form-input>
           <div class="mt-2"> {{year}} рік</div>
      </b-form-group>
      <b-form-group label="Країна:">
        <b-form-input
          v-model="country"
          placeholder="Введіть країну..."
        ></b-form-input>
      </b-form-group>
       <b-form-group label="Актори:">
        <b-form-textarea
          v-model="actors"
          placeholder="Введіть акторів..."
          rows="2"
          max-rows=1
        ></b-form-textarea>
      </b-form-group>
       <b-form-group label="Тривалість:">
        <b-form-input
          v-model="duration"
          type="range"
          min="0"
          max="200"
        ></b-form-input>
        <div class="mt-2"> {{duration}} хв</div>
      </b-form-group>
    <b-button variant="light" @click="onAddMovie">
      Додати фільм
    </b-button>
        </b-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        name:"AddMovieForm",
        data() {
          return {
           name:null,
           year:null,
           country:null,
           actors:null,
           duration:null,
           image:null,
           genre:null
            }
        },
        methods:{
        ...mapActions(['addMovie']),
        onAddMovie(){
            const{name,image,genre,year,country,actors,duration}=this

            this.addMovie({
                name,
                image,
                genre,
                year,
                country,
                actors,
                duration
            })
        },
        },
    }
    
</script>

<style lang="scss" scoped>

</style>