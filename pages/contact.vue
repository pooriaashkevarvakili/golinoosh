<template>
    <div>
        <div class="flex items-center flex-col justify-center mt-5">
            <div style="direction:rtl">
                <ContentDoc class="text-2xl w-10/12 mr-60" path="/about" />
            </div>

            <div class="mt-4">
                <form style="direction:rtl" class="flex flex-col" action="">

                    <label for="">نام</label>
                    <input class="border border-gray-300 py-4 input mt-4 w-full" type="text">
                    <label class="mt-4" for="">پست الکترونیکی</label>
                    <input class="border border-gray-300 py-4 input mt-4 w-full" type="text">
                    <label class="mt-4" for="">موضوع</label>
                    <input class="border border-gray-300 py-4 input mt-4 w-full" type="text">
                    <label for="">پیغام</label>
                    <textarea type="text" class="border border-gray-300 py-4 input mt-4 w-full h-20" />
                    <button class="btn btn-success text-white mt-4 w-96 rounded-xl">ارسال</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>