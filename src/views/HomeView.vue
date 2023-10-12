<template>
  <Layout>

    <div class="container my-5">
      <input type="text" placeholder="search" @keyup="search" class="form-control">
      <div class="row justify-content-center">
        <div class="col-lg-2">
          <h4>Kelas kami</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="(item, index) in products" :key="index">
          <Product :product="item" />
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Product from '@/components/Products/Product.vue';
import { get } from '@/Api/index.js';
import Navbar from '@/components/Layouts/Navbar.vue';
import Layout from '@/views/Layout.vue';
export default {
  components: {
    Product,
    Navbar,
    Layout
  },
  data() {
    return {
      products: []
    }
  },
  async created() {
    this.get();
  },
  methods: {
    async get() {
      const response = await get('?institution_id=1');
      this.products = response.trainings.data;
    },
    async search(value) {
      if (value.target.value == '') {
        this.get();
        return;
      }
      const response = await get(`?institution_id=1&search=${value.target.value}`);
      this.products = response.trainings.data;

    }
  }
}
</script>


