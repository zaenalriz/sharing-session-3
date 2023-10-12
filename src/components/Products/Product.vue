<template>
    
    <div class="card" style="width: 18rem;">
        <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <span>Review({{ product.reviews_count }})</span>
            <p class="card-text">Rp {{ product.price }}</p>
            <a href="#" class="btn btn-primary">Detail</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>