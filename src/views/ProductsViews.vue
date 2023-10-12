<template>
    <Layout>

        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-2">
                    <h4>Product kami</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <Product />
                </div>
            </div>
        </div>
    </Layout>
</template>
<script>
import Product from '@/components/Products/Product.vue';
import Layout from '@/views/Layout.vue';
export default {
    components: {
        Product,
        Layout
    }
}
</script>


