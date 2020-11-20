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
        name:'movie-info',
        component:MovieInfo
    }

];
const router=new VueRouter({
    mode:"history",
    routes
});

export default router;