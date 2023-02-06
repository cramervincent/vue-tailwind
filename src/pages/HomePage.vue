<template>
  <div class="container">
    <div class="title">Categorieën</div>
    <div class="category-grid">
      <div class="category-item" v-for="(cat, i) in categories" :key="cat">
        <div class="background-image">
          <img :src="'https://picsum.photos/seed/' + i + '/175'" />
          <span class="category-title">Categorie {{ i }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="container usps">
    <div class="usp-card">
      <i class="las la-shipping-fast"></i><span>Lorem, ipsum dolor.</span>
    </div>
    <div class="usp-card">
      <i class="las la-business-time"></i><span>Lorem, ipsum dolor.</span>
    </div>
    <div class="usp-card">
      <i class="las la-medal"></i><span>Lorem, ipsum dolor.</span>
    </div>
  </div>
  <div class="container-fluid">
    <div class="title">Bestsellers</div>
    <carousel :items-to-show="1.5" :wrap-around="true">
      <slide v-for="slide in 10" :key="slide">
        <product-card :img="slide" :pid="slide"/>
      </slide>
    </carousel>
  </div>
  <div class="container">
    <div class="title">Populaire merken</div>
    <carousel :items-to-show="5" :wrap-around="true">
      <slide v-for="slide in 10" :key="slide">
        <img
          :src="'https://picsum.photos/seed/' + slide + '/175'"
          class="brand-logo"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ProductCard from "../components/productCard.vue";

export default {
  components: {
    Carousel,
    Slide,
    ProductCard,
  },
  data() {
    return {
      categories: 6,
    };
  },
};
</script>
