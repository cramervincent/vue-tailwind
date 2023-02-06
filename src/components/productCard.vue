<template>
  <div class="product-card" @click="$router.push({name:'product', params:{id:pid}})">
    <div class="product-image">
      
      <span class="discount-banner">Aanbieding</span>
      <img :src="'https://picsum.photos/seed/' + img +'/600/400'" alt="" />
      <div class="product-actions">
        <span class="add-to-favorites"></span>
        <span class="add-to-cart"></span>
      </div>
    </div>
    <div class="product-title">Lorem, ipsum.</div>
    <div class="product-description">Lorem ipsum dolor sit amet consectetur.
    </div>
    <div class="product-price">
      <span class="from-price">€29,95</span>
      <span class="for-price">€19,95</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['img', 'pid']
};
</script>
