<template>
    <div class="image-viewer-wrapper">
   <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
    <Slide v-for="slide in 5" :key="slide">
      <div class="carousel__item">
    <div class="single-product-card">
        <div class="product-image">
            <img :src="'https://picsum.photos/seed/' + slide+2 + '/1800/1800'" alt="">
        </div>
    </div>
    </div>
    </Slide>
  </Carousel>
  <Carousel
    id="thumbnails"
    :items-to-show="4"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="slide in 5" :key="slide">
      <div class="carousel__item" @click="slideTo(slide - 1)">
        <div class="product-thumbnail">
            <img :src="'https://picsum.photos/seed/' + slide+2 + '/100/100'" alt="">
            </div>
    </div>
    </Slide>
  </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
})
</script>