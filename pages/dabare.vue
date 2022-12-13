<template>
    <div class="flex items-center justify-center">
        <div class="card  w-7/12  rounded-lg  bg-base-100 shadow-xl">
            <div class="card-body">
                <div class="text-center">
                    <div class="text-3xl mt-3">درباره ما</div>
                    <ContentDoc class="text-xl" path="about" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'مجله'
})
</script>

<style>

</style>