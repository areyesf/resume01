<template>
  <div id="app">
    <header>
      <!-- INFO -->
      <div class="info trapecio">
        <!-- NAVEGATION -->
        <div class="nav">
          <router-link to="/">Inicio</router-link>|
          <router-link to="/experiencia">Experiencia</router-link>|
          <router-link to="/educacion">Educación</router-link>|
          <router-link to="/contacto">Contacto</router-link>
        </div>
        <!-- PERSONAL INFORMATION -->
        <h1>Andrés Reyes</h1>
        <ul>
          <li>
            <i class="far fa-envelope"></i>
            an.reyesf@gmail.com
          </li>
          <li>
            <i class="fab fa-whatsapp"></i>
            +56 9 20 63 0111
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i>
            El Estribo, Melipilla, Región Metropolitana, CL
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- IMG PROFILE -->
      <div class="img-profile">
        <img src="https://i.ibb.co/2Zdm46K/model-2911330-1280.jpg" alt="">
      </div>
    </header>
    <!-- ROUTER VIEW -->
    <router-view />
  </div>
</template>

<style lang="scss">
// IMPORT FONT
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");

// RESET
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// GENERAL STYLE
body {
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none;
}

// COLOR PALETTE
$cian: #60b8b8;
$white: #fff;

header {
  height: 30vh;
  display: flex;
  justify-content: space-between;

  .info {
    background-color: $cian;
    color: $white;
    height: 100%;
    width: 100%;
    border-right: 30vh solid red;
    border-bottom: 30vh solid $cian;
    .nav {
      a {
        color: $white;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
  .img-profile {
    width: 300px;
    img{
      width: 100%;
    }
  }
}
</style>
