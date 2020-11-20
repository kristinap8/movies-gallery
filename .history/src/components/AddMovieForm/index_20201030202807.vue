<template>
    <div>
     <div>
      <label>
        Назва фільму:
        <input type="text" v-model="name" />
      </label>
    </div>
    <div>
      <label>
        Картинка:
        <input type="url" v-model="image" />
      </label>
    </div>
    <div>
      <label>
        Жанр:
        <select v-model="genre" class="form-control">
            <option value="Comedy">Комедія</option>
            <option value="Detective">Детектив</option>
            <option value="Triller">Триллер</option>
            <option value="Horror">Жахи</option>
            <option value="Drama">Драма</option>
            <option value="Cartoon">Мультфільм</option>
            <option value="Action">Бойовик</option>
            <option value="Fantastic">Фантастика</option>
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
    </div>
    <button @click="onAddMovie">
      Додати фільм
    </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        name:"AddMovieForm",
        data() {
          return {
           name:null,
           image:null,
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