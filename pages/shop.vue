<template>
    <div style="direction:rtl">
        <div
            class="grid mt-4 3xl:mr-12 3xl:grid-cols-3 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 2xl:mr-0 xl:mr-0 lg:mr-0 md:mr-72 sm:mr-52 4xl:mr-36 5xl:mr-20 gird-cols-1 2xl:gap-4 xl:gap-4 lg:gap-4 gap-4">
            <div v-for="product in products" :key="product.id" class="card w-96 bg-base-100 shadow-xl">
                <figure><img :src="product.img" :alt="product.name" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{{ product.name }}</h2>
                    <p>{{ product.price }}تومان</p>
                    <div class="card-actions justify-end">
                        <button @click="cartStore.addToCart(product)" class="btn btn-primary w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span class="text-xl mr-2">سفارش</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from "../stores/product"
import { useCartStore } from "../stores/cart"
const counterStore = useProductStore()
const cartStore = useCartStore()
const products = computed(() => counterStore.getProducts)
useHead({
    title: 'فروشگاه'
})
</script>

<style>

</style>