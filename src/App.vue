<template>
  <RouterView />
</template>
<script>
import Navbar from './components/Layouts/Navbar.vue';
export default {
  components: {
    Navbar
  },
}
import Cookies from 'js-cookie';


</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>

