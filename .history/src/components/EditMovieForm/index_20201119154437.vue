<template>
    <div>
      <div class="fixed-top d-flex align-items-center justify-content-center"
    style="bottom: 0; overflow-y: auto">
        <b-form style="max-width:800px;">
        <b-form-group label="Назва фільму:" label-for="name">
        <b-form-input
          id="name"
          v-model="movieToEdit.name"
          placeholder="Введіть назву фільму..."
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Картинка:" label-for="image">
        <b-form-input 
          id="image"
          v-model="movieToEdit.image"
          placeholder="Введіть url картинки..."
        ></b-form-input>
      </b-form-group>
       <b-form-group label="Жанр:" label-for="genre">
        <b-form-select
          id="genre"
          v-model="movieToEdit.genre"
          :options="genres"
         ></b-form-select>
      </b-form-group>
      <b-form-group label="Рік:" label-for="year">
        <b-form-input
          id="year"
          v-model="movieToEdit.year"
          type="range"
          min="1800"
          max="2020"
           ></b-form-input>
           <div class="mt-2"> {{movieToEdit.year}} рік</div>
      </b-form-group>
      <b-form-group label="Країна:" label-for="country">
        <b-form-input
          id="country"
          v-model="movieToEdit.country"
          placeholder="Введіть країну..."
        ></b-form-input>
      </b-form-group>
       <b-form-group label="Актори:" label-for="actors">
        <b-form-textarea
          id="actors"
          v-model="movieToEdit.actors"
          placeholder="Введіть акторів..."
          rows="2"
          max-rows=1
        ></b-form-textarea>
      </b-form-group>
       <b-form-group label="Тривалість:" label-for="duration">
        <b-form-input
          id="duration"
          v-model="movieToEdit.duration"
          type="range"
          min="0"
          max="200"
        ></b-form-input>
        <div class="mt-2"> {{movieToEdit.duration}} хв</div>
      </b-form-group>
      <b-button-group>
      <b-button variant="light" to="/all_movies">
      Повернутися
    </b-button>
       <b-button variant="light" @click="onEdit()">
      Зберегти зміни
    </b-button>
      </b-button-group>
        </b-form>
    </div>
    </div>
</template>

<script>
    export default {
        name:"EditMovieForm",
        data() {
            return {
               genres:[{ text: 'Виберіть жанр...', value: null },"Комедія","Детектив","Триллер","Жахи","Драма","Мультфільм","Бойовик","Фантастика"],
            }
        },
        computed: {
            movieToEdit() {
                return this.$store.getters.getMovieById(this.$route.params.movie_id)
            },
        },
        methods: {
               onEdit(newMovie) {
                this.$store.dispatch("editMovie",newMovie)
                this.$router.push('/all_movies')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>