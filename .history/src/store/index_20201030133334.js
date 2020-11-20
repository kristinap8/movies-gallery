import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
       moviesList:[
           {
               id:1,
               name:"Джокер",
               image:"https://upload.wikimedia.org/wikipedia/ru/thumb/6/6f/%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%A2%D0%BE%D0%B4%D0%B4%D0%B0_%D0%A4%D0%B8%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%D0%B0%29.jpg/202px-%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%A2%D0%BE%D0%B4%D0%B4%D0%B0_%D0%A4%D0%B8%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%D0%B0%29.jpg",
               genre:"Драма",
               year:2019,
               country:"США",
               actors:["Роберт де Ніро","Хоакін Фенікс","Ши Уигхем"],
               duration:122
           },
           {
            id:2,
            name:"Воно",
            image:"https://media.socastsrm.com/wordpress/wp-content/blogs.dir/679/files/2019/09/it_chapter_two_pennywise_poster.png",
            genre:"Триллер",
            year:2017,
            country:"США",
            actors:["Білл Скарсгард","Ері Коен","Хавйер Ботет"],
            duration:135
           },
           {
            id:3,
            name:"Форсаж 8",
            image:"https://img.odessa1.com/images/events/326x464/m2-17534-1.jpg",
            genre:"Бойовик",
            year:2017,
            country:"США",
            actors:["Він Дизель","Джейсон Стейтем","Дуейн Джонсон"],
            duration:136
           }   
       ]
    },
    mutations:{

    },
    actions:{

    },
    getters:{

    },
    modules:{

    }
})

export default store;