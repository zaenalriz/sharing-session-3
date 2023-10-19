<template>
    <Layout>

        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-2">
                    <h4>Kelas saya </h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4" v-for="(item, index) in products" :key="index">
                    <Class :product="item" />
                </div>
            </div>
        </div>
    </Layout>
</template>
<script>
import Class from '@/components/MyClass/Class.vue';
import Layout from '@/views/Layout.vue';
import { getWithHeader } from '@/Api/index.js';
export default {
    components: {
        Class,
        Layout
    },
    data() {
        return {
            products: []
        }
    },
    async created() {
        let response = await getWithHeader('/myclass');
        this.products = response.trainings.data;
    }
}
</script>


