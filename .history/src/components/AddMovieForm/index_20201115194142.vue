<template>
    <div class="fixed-top d-flex align-items-center justify-content-center"
    style="bottom: 0; overflow-y: auto">
        <b-form style="max-width:800px;">
        <b-form-group label="Назва фільму:" label-for="name">
        <b-form-input
          id="name"
          v-model="name"
          placeholder="Введіть назву фільму..."
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Картинка:" label-for="image">
        <b-form-input 
          id="image"
          v-model="image"
          placeholder="Введіть url картинки..."
        ></b-form-input>
      </b-form-group>
       <b-form-group label="Жанр:" label-for="genre">
        <b-form-select
          id="genre"
          v-model="genre"
          :options="genres"
         ></b-form-select>
      </b-form-group>
      <b-form-group label="Рік:" label-for="year">
        <b-form-input
          id="year"
          v-model="year"
          placeholder="Введіть рік..."
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Країна:" label-for="country">
        <b-form-input
          id="country"
          v-model="country"
          placeholder="Введіть країну..."
        ></b-form-input>
      </b-form-group>
       <b-form-group label="Актори:" label-for="actors">
        <b-form-textarea
          id="actors"
          v-model="actors"
          placeholder="Введіть акторів..."
          rows="2"
          max-rows=1
        ></b-form-textarea>
      </b-form-group>
       <b-form-group label="Тривалість:" label-for="duration">
        <b-form-input
          id="duration"
          v-model="duration"
          type="range"
          min="0"
          max="200"
        ></b-form-input>
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
           genre:null,
           year:null,
           country:null,
           actors:null,
           duration:null,
           genres:[{ text: 'Виберіть жанр...', value: null },"Комедія","Детектив","Триллер","Жахи","Драма","Мультфільм","Бойовик","Фантастика"],
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