<template>
   <div class="container">
    <div class="close-nav">
        <i class="las la-times" @click="toggleMenu"></i>
    </div>
   </div>
   <div class="container">
    <ul class="nav-menu">
        <li class="nav-item"><i class="las la-heartbeat"></i><a href="#" class="nav-link">Lorem, ipsum.</a></li>
        <li class="nav-item"><i class="las la-dumbbell"></i><a href="#" class="nav-link">Lorem, ipsum.</a></li>
        <li class="nav-item"><i class="las la-bath"></i><a href="#" class="nav-link">Lorem, ipsum.</a></li>
        <li class="nav-item"><i class="las la-restroom"></i><a href="#" class="nav-link">Lorem, ipsum.</a></li>
        <li class="nav-item"><i class="las la-home"></i><a href="#" class="nav-link">Lorem, ipsum.</a></li>
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