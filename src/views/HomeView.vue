<template>
  <Layout>

    <div class="container my-5">
      <MDBInput @keyup="search" inputGroup :formOutline="false" wrapperClass="mb-3" placeholder="Search"
        aria-label="Search" aria-describedby="button-addon2">
        <MDBBtn color="primary">
          <MDBIcon icon="search" />
        </MDBBtn>
      </MDBInput>
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
import { MDBInput, MDBBtn, MDBIcon } from 'mdb-vue-ui-kit';
export default {
  components: {
    Product,
    Navbar,
    Layout,
    MDBInput,
    MDBBtn,
    MDBIcon
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


