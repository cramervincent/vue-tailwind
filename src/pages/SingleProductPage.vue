<template>
  <div class="container-fluid spp">
       <product-image-viewer />
  </div>
  <div class="container">
    <div class="product-title">Lorem, ipsum. Product {{ id }}</div>
    <div class="product-brand">ACME©</div>
    <div class="product-new-price">€{{ 12.95 * id }}0</div>
    <div class="product-old-price">Was eerder:€{{ 12.95 * id * 2 }}0 (-50%)</div>
  </div>
</template>

<script>
import ProductImageViewer from '../components/productImageViewer.vue';

export default {
  components: {
    ProductImageViewer,
   
  },
  props:{
    id:{required:true}
  },
  data() {
    return {
      
    };
  },
};
</script>
