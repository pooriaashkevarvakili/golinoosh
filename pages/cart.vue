<template>
    <div>
        <div class="flex items-center justify-center flex-col mt-24" v-if="product.length == 0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <span class="text-2xl mt-2"> سبدخرید شما خالی است </span>
            <nuxt-link class="bg-black px-10 py-3 rounded-xl mt-5 text-white" to="/">خانه</nuxt-link>
        </div>
        <div
            class="grid  3xl:grid-cols-3 2xl:ml-10 xl:ml-10 md:ml-24 sm:ml-12 4xl:ml-10 5xl:ml-8 lg:ml-10 mt-4 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 gird-cols-1 2xl:gap-4 xl:gap-4 lg:gap-4 gap-4">
            <div v-for="item in product" :key="item.id" class="card w-96 bg-base-100 shadow-xl">
                <figure><img :src="item.img" :alt="item.name" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-base">{{ item.name }}</h2>
                    <p style="">{{ item.price }}</p>
                    <p>{{ totalAmount }}</p>
                    <div>
                        <button @click="cartStore.increment(item.id)" class="btn btn-primary">+</button>
                        <span class="ml-2 mt-2">{{ item.quantity }}</span>
                        <button @click="cartStore.decrement(item.id)" class="btn ml-2 btn-primary">-</button>
                    </div>
                    <div class="card-actions justify-between">
                        <button @click="cartStore.clear" class="btn btn-primary">clear</button>
                        <button @click="cartStore.remove(item.id)" class="btn btn-primary">remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useCartStore } from "../stores/cart"
const cartStore = useCartStore()
const product = computed(() => cartStore.getProducts)
const totalAmount = computed(() => cartStore.totalAmount)
useHead({
    title: 'سبدخرید'
})
</script>

<style>

</style>