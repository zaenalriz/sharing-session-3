<template>
    <Layout>
        <section>
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid" alt="Sample image">
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form @submit.prevent="login">
                            <h3 class="mb-3">Selamat datang</h3>
                            <div class="alert alert-danger" v-if="error">{{ error }}</div>
                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <MDBInput label="Masukan email" size="lg" v-model="form.email" />
                            </div>

                            <!-- Password input -->
                            <MDBInput label="Masukan password" size="lg" type="password" v-model="form.password" />



                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" class="btn btn-primary btn-lg"
                                    style="padding-left: 2.5rem; padding-right: 2.5rem;">
                                    <div class="spinner-border text-primary" role="status" v-if="loading">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    <div v-else>
                                        Login
                                    </div>
                                </button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Belum punya akun?
                                    <router-link :to="{ name: 'register' }" class="link-danger">
                                        Register
                                    </router-link>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    </Layout>
</template>
<script>
import { MDBInput } from 'mdb-vue-ui-kit';
import Cookies from 'js-cookie';
import { post } from '@/Api/index.js';
import Layout from '@/views/Layout.vue';

export default {

    components: {
        Layout,
        MDBInput
    },
    props: ['islogin'],
    data() {
        return {
            form: {
                email: '',
                password: '',
                institution_id: 1
            },
            error: false,
            loading: false
        }
    },

    methods: {

        async login() {
            this.loading = true;
            let response = await post('/login', this.form);
            if (!response.success) {
                this.error = response.message;
                return;
            }
            this.loading = false;
            Cookies.set('X-TOKEN-APP', response.data.access_token);
            this.$router.push({ name: 'home' });
        }
    }
}
</script>
<style scoped>
.divider:after,
.divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
}

.h-custom {
    height: calc(100% - 73px);
}

@media (max-width: 450px) {
    .h-custom {
        height: 100%;
    }
}
</style>