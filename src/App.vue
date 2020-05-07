<template>
  <div id="app">
    <header>
      <!-- INFO -->
      <div class="info">
        <!-- NAVEGATION -->
        <div class="nav">
          <router-link to="/">Inicio</router-link>|
          <router-link to="/experiencia">Experiencia</router-link>|
          <router-link to="/educacion">Educación</router-link>|
          <router-link to="/contacto">Contacto</router-link>
        </div>
        <!-- PERSONAL INFORMATION -->
        <div class="personal-info">
          <h1>Andrés Reyes</h1>
          <ul class="info-contact">
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
          <ul class="social-info">
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
      </div>
      <!-- IMG PROFILE -->
      <div class="img-profile">
        <img src="https://i.ibb.co/2Zdm46K/model-2911330-1280.jpg" alt />
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
ul {
  list-style: none;
}

// COLOR PALETTE
$cian: #60b8b8;
$white: #fff;
$gray: #6b6b6b;
//break point to responsive design
$break-point: 950px;

header {
  height: 334px;
  display: flex;
  position: relative;
  background-color: $cian;
  .info {
    color: $white;
    height: 100%;
    width: 50%;
    .nav {
      text-align: center;
      padding: 1rem 0;
      a {
        color: $white;
        padding: 0 10px;
        transition: all ease .5s;

        &.router-link-exact-active {
          border-bottom: 1px solid $white;
          opacity: .5;
        }
      }
    }
    .personal-info {
      padding: 0 2rem;
      h1 {
        padding: 1rem 0;
      }
      .info-contact {
        li {
          padding: 0.5rem 0;
          i {
            padding-right: 1rem;
          }
        }
      }
      .social-info {
        width: 50%;
        margin-top: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          a {
            color: $white;
            i {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
  .img-profile {
    width: 500px;
    position: absolute;
    right: 0;
    img {
      width: 100%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
    }
  }

  //MEDIA RULES
  @media (max-width: $break-point) {
    .info{
      width: 100%;
      .personal-info{
        padding: 0 .5rem;
        h1{
          text-align: center;
        }
        .social-info{
          padding-top: .5rem;
          width: 100%;
        }
      }
    }
    .img-profile {
      display: none;
    }
  }
}
</style>
