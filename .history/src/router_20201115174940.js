import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home";
import Movie from "@/pages/Movie";
import AddMovie from "@/pages/AddMovie";
import AllMovies from "@/pages/AllMovies";

Vue.use(VueRouter);

const routes=[
    {
        path:"/",
        name:'home',
        component:Home
    },
    {
        path:"/all_movies",
        name:'all-movies',
        component:AllMovies
    },
    {
        path:"/add_movie",
        name:'add-movie',
        component:AddMovie
    },
    {
        path:"/movie/:movie_id",
        name:'movie',
        component:MovieInfo
    }
];
const router=new VueRouter({
    mode:"history",
    routes
});

export default router;