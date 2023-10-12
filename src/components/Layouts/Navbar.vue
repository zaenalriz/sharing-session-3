<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" alt="logo" id="logo" class="rounded">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100">
                    <li class="nav-item mx-2">
                        <router-link class="nav-link " :class="{ active: $route.name == 'home' }"
                            :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link " aria-current="page" href="#">Keranjang</a>
                    </li>
                    <li class="nav-item mx-2" v-if="!profile">
                        <router-link class="nav-link" :class="{ active: $route.name == 'login' }"
                            :to="{ name: 'login' }">Login</router-link>
                    </li>
                    <li class="nav-item dropdown" v-else>
                        <a class="nav-link dropdown-toggle" :class="{ active: $route.name == 'myclass' }" href="#"
                            id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ profile.name }}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li> <router-link class="dropdown-item" :to="{ name: 'profile' }">My profile</router-link></li>
                            <li> <router-link class="dropdown-item" :to="{ name: 'myclass' }">My class</router-link></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
</template>

<script>
import { getWithHeader } from '@/Api/index.js';

export default {

    data() {
        return {
            profile: true
        }
    },
}
</script>