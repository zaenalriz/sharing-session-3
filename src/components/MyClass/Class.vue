<template>
    <div class="card">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">

            <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ product.training.title }}</h5>
            <router-link class="btn btn-primary" :to="{
                name: 'detail_products', params: {
                    id: product.id
                }
            }">Detail</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>