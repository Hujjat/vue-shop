<template>
  <div class="add-to-cart">
   
        <button class="btn btn-primary" @click="addToCart"> Add to Cart </button>
    
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    productId: String
  },

  data(){
      return {
          item :{
            productName: this.name,
            productPrice: this.price,
            product_id: this.id,
          }

      }
  },
  methods:{
    addToCart(){
      this.$store.commit('addToCart', this.item)
    }

  }

};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
