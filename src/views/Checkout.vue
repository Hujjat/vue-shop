<template>
  <div class="chekout">
    <Navbar></Navbar>

    <div class="container mt-5 pt-5">
      <div class="row">
        <!--- <div class="col-md-9">
                    <h4 class="py-4">Checkout page</h4>
                     <ul>
                        <li v-for="item in this.$store.state.cart" class="media">
                        <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}

                                <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span>

                            </h5>
                            <p class="mt-0">{{item.productPrice | currency}}</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                        </div>
                        </li>

                    </ul>
                </div>
                <div class="col-md-3">
                    Total Price
        </div>-->
        <table class="table table-borderless">
          <thead>
            <tr>
              <th>#</th>
              <th scope="col">Items</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in this.$store.state.cart">
              <td>
                <span @click="$store.commit('removeFromCart',item)" class="remove-item">X</span>
              </td>
              <td>
                <img :src="item.productImage" alt style="width:100px">
                {{item.productName}}
              </td>
              <td>
                <div class="center">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="decreaseQty(item.productId)"
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </span>
                    <input
                      type="text"
                      :value="item.productQuantity"
                      class="form-control input-number"

                    >
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-success"
                        @click="increaseQty(item.productId)"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </td>
              <td>{{item.productPrice}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "checkout",
  props: {
  },

  data(){
      return {
      }
  },
  methods: {
    increaseQty(id) {        
        this.$store.commit('increment', id)
    },
    decreaseQty(id) {
        this.$store.commit('decrement', id)
    }
  },
  created() {}
};
</script>
<style scoped lang="scss">
.center {
  width: 25%;
  margin: 40px auto;
}
</style>
