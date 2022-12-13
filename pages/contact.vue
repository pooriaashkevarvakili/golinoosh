<template>
    <div class="flex items-center justify-center">


        <div class="card w-7/12 bg-base-100 shadow-xl">
            <div class="text-center mt-5 text-xl">تماس باما</div>
            <div style="direction:rtl" class="card-body">
                <ContentDoc class="text-2xl w-10/12" path="/about" />

            </div>
            <div class="p-5  ">
                <form style="direction:rtl" class="flex flex-col" action="">

                    <label for="">نام</label>
                    <input class="border  border-gray-300 py-4 input mt-4 w-full" type="text">
                    <label class="mt-4" for="">پست الکترونیکی</label>
                    <input class="border border-gray-300 py-4 input mt-4 w-full" type="text">
                    <label class="mt-4" for="">موضوع</label>
                    <input class="border border-gray-300 py-4 input mt-4 w-full" type="text">
                    <label for="">پیغام</label>
                    <textarea type="text" class="border border-gray-300 py-4 input mt-4 w-full h-20" />
                    <button class="btn btn-success text-white mt-4 w-full rounded-xl">ارسال</button>
                </form>
            </div>
        </div>
    </div>
    <!-- <div>
        <div class="flex bg-white p-5 items-center flex-col justify-center mt-5">
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
    </div> -->
</template>

<script setup>

</script>

<style>

</style>