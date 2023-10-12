<template>
    <div>
        <Navbar></Navbar>
        <slot></slot>
    </div>
</template>

<script>
import Navbar from '../components/Layouts/Navbar.vue';
export default {
    components: {
        Navbar
    },
   
}
</script>