import Vue from "vue";
import VueRouter from "vue-router";

import MovieInfo from "./components/MovieInfo";

Vue.use(VueRouter);

const routes=[
    {path:"/"}
];
const router=new VueRouter({
    mode:"history",
    routes
});

export default router;