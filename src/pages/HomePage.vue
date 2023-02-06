<template>
  <div class="container">
    <div class="title">Categorieën</div>  
    <div class="category-grid">
      <div class="category-item" v-for="cat in categories" :key="cat">
      <div class="background-image">
        <img src="https://picsum.photos/id/1058/400/400">
        <span class="category-title">Lorem</span>
      </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="title">Populaire merken</div>
    <carousel :items-to-show="5" :wrap-around="true">
      <slide v-for="slide in 10" :key="slide">
      <img src="https://picsum.photos/id/684/175/175" class="brand-logo"/>
      </slide>
    </carousel>
  </div>
  <div class="container">
    <div class="title">Bestsellers</div>
    <carousel :items-to-show="1.5" :wrap-around="true">
      <slide v-for="slide in 10" :key="slide">
      <product-card />
      </slide>
    </carousel>
  </div>
</template>

<script>

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ProductCard from '../components/productCard.vue';

export default {
  components: {
    Carousel,
    Slide,
    ProductCard
  },
  data(){
    return{
      categories:6
    }
  }
};
</script>
