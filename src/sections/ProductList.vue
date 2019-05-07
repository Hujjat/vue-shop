<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products List</h1>
          <div class="row">
              
              <div class="col-md-4" v-for="product in products">
                  <div class="card product-item">
                    <img src="/img/products/product1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <p class="card-text">
                                {{ product.description }}

                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

          </div>
      </div>
    
  </div>
</template>

<script>
import {db} from '../firebase';


export default {
  name: "Products-list",
  props: {
    msg: String
  },

data(){
    return {
        products: [],
     
    }
  },

  firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>
