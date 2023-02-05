<template>
   <div class="container">
    <div class="close-nav">
        <i class="las la-times" @click="toggleMenu"></i>
    </div>
   </div>
   <div class="container">
    <ul class="nav-menu">
        <li class="nav-item"><a href="#" class="nav-link">Lorem, ipsum.</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Lorem, ipsum.</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Lorem, ipsum.</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Lorem, ipsum.</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Lorem, ipsum.</a></li>
    </ul>
   </div>
</template>

<script>
export default {
    methods: {
    toggleMenu() {
      let menu = document.querySelector(".menu");
      menu.classList.toggle("show");
    },
  },
}
</script>