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
                            <h3>Login</h3>
                            <div class="alert alert-danger" v-if="error">{{ error }}</div>
                            <div class="alert alert-danger" v-if="islogin">{{ islogin }}</div>
                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input type="email" v-model="form.email" id="form3Example3"
                                    class="form-control form-control-lg" placeholder="Enter a valid email address" />
                                <label class="form-label" for="form3Example3">Email address</label>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-3">
                                <input type="password" v-model="form.password" id="form3Example4"
                                    class="form-control form-control-lg" placeholder="Enter password" />
                                <label class="form-label" for="form3Example4">Password</label>
                            </div>


                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" class="btn btn-primary btn-lg"
                                    style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Sudah punya akun? <router-link
                                        :to="{ name: 'login' }" class="link-danger">Login</router-link>
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

import Cookies from 'js-cookie';
import { post } from '@/Api/index.js';
import Layout from '@/views/Layout.vue';

export default {

    components: {
        Layout
    },
    props: ['islogin'],
    data() {
        return {
            form: {
                email: '',
                password: '',
                institution_id: 1
            },
            error: false
        }
    },

    methods: {

        async login() {
            let response = await post('/login', this.form);
            if (!response.success) {
                this.error = response.message;
                return;
            }
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