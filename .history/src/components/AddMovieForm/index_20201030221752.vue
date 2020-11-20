<template>
    <div>
        <b-form>
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
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
     <div>
      <label>
        Жанр:
        <select v-model="genre" class="form-control">
            <option value="Комедія">Комедія</option>
            <option value="Детектив">Детектив</option>
            <option value="Триллер">Триллер</option>
            <option value="Жахи">Жахи</option>
            <option value="Драма">Драма</option>
            <option value="Мультфільм">Мультфільм</option>
            <option value="Бойовик">Бойовик</option>
            <option value="Фантастика">Фантастика</option>
        </select>
      </label>
    </div>
    <div>
      <label>
        Рік:
        <input type="number" v-model="year" />
      </label>
    </div>
    <div>
      <label>
         Країна:
        <input type="text" v-model="country" />
      </label>
    </div>
    <div>
      <label>
        Актори:
        <input type="textarea" v-model="actors" />
      </label>
    </div>
     <div>
      <label>
        Тривалість:
        <input type="number" v-model="duration" />
      </label>
    </div> -->

    <b-button variant="success" @click="onAddMovie">
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
           duration:null
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