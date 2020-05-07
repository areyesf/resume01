import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () => import("../views/Inicio.vue"),
  },
  {
    path: "/experiencia",
    name: "Experiencia",
    component: () => import("../views/Experiencia.vue"),
  },
  {
    path: "/educacion",
    name: "Educacion",
    component: () => import("../views/Educacion.vue"),
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () => import("../views/Contacto.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
