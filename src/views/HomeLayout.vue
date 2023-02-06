<template>
  <div class="info-bar">
    <div class="container">
      <ul class="usp">
        <li>Duitse prijzen</li>
        <li>A kwaliteit</li>
        <li>Snelle levering</li>
      </ul>
    </div>
  </div>
  <header>
    <div class="navbar">
      <div class="logo">Billiger Bazare</div>
      <div class="favorites"><i class="las la-bookmark"></i></div>
      <div class="shopping_basket"><i class="las la-shopping-basket"></i></div>
      <div class="menu-toggle" @click="toggleMenu">
        <i class="las la-bars"></i>
      </div>
    </div>
  </header>
  <div class="menu">
      
      <navigation-menu />
   
  </div>
  <main><router-view /></main>
  <footer>footer</footer>
</template>

<script>
import navigationMenu from "../components/navigationMenu.vue";
export default {
  components: { navigationMenu },
  methods: {
    toggleMenu() {
      let menu = document.querySelector(".menu");
      menu.classList.toggle("show");
    },
  },
};
</script>
