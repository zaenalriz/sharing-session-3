<template>
    <Layout>

        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-2">
                    <h4>Kelas saya </h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <!-- <Product /> -->
                </div>
            </div>
        </div>
    </Layout>
</template>
<script>
import Product from '@/components/Products/Product.vue';
import Layout from '@/views/Layout.vue';
import { getWithHeader } from '@/Api/index.js';
export default {
    components: {
        Product,
        Layout
    },
    async created() {
        let response = await getWithHeader('/myclass');
        console.log(response);
    }
}
</script>


