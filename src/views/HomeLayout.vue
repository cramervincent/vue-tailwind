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
    <div class="menu" @click="toggleMenu">
      <div class="container">
        <ul>
          <li>menu item 1</li>
          <li>menu item 2</li>
          <li>menu item 3</li>
          <li>menu item 4</li>
          <li>menu item 5</li>
        </ul>
      </div>
    </div>
    <div class="navbar">
      <div class="menu-toggle" @click="toggleMenu"><i class="las la-bars"></i></div>
      <div class="logo">LOGO</div>
      <div class="shopping_basket"><i class="las la-shopping-basket"></i></div>
    </div>
  </header>
  <main><router-view /></main>
  <footer>footer</footer>
</template>

<script>
export default {
    methods:{
        toggleMenu(){
            let menu = document.querySelector('.menu')
            menu.classList.toggle('show');
            }

        }
    }

</script>
