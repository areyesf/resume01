<template>
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
</template>
<script>
export default {
    name: 'Header'
}
</script>