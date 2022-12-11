<template>
    <div>
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <!-- Navbar -->
                <div
                    class="w-full 2xl:px-36 xl:px-36 lg:px-36 sm:px-0 md:px-0 4xl:px-0 5xl:px-0 xs:px-0 navbar bg-base-300">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div class="flex-1 space-x-3 hidden 2xl:flex lg:flex xl:flex px-2 mx-2">
                        <nuxt-link class="btn" to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </nuxt-link>
                        <nuxt-link class="btn" to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>


                        </nuxt-link>



                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <li><a href="">مجله</a></li>
                            <!-- Navbar menu content here -->
                            <li><a href="">تماس با ما</a></li>
                            <li><a href="">درباره ما</a></li>
                            <li><a>فروشگاه</a></li>
                            <li><nuxt-link to="/">خانه</nuxt-link></li>
                            <li>
                                <img class="h-20" src="https://golinoosh.com/uploads/logo/ec9bea.png" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Page content here -->
                <slot />
                <div class="mt-4">
                    <Footer />
                </div>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul style="direction:rtl" class="menu p-4 w-80 bg-base-100">
                    <!-- Sidebar content here -->
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>


                    <li>
                        <img class="h-24" src="https://golinoosh.com/uploads/logo/ec9bea.png" alt="">
                    </li>
                    <div class="flex  ">
                        <li>
                            <nuxt-link class="btn" to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>

                            </nuxt-link>
                        </li>
                        <li class="mr-3">
                            <nuxt-link class="btn" to="/login">


                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </nuxt-link>
                        </li>
                    </div>
                    <li><a href="">مجله</a></li>
                    <!-- Navbar menu content here -->
                    <li><a href="">تماس با ما</a></li>
                    <li><a href="">درباره ما</a></li>
                    <li><a>فروشگاه</a></li>
                    <li><nuxt-link to="/">خانه</nuxt-link></li>

                </ul>

            </div>
        </div>
    </div>
</template>

<script setup>
import Footer from "./Footer.vue"
</script>

<style>

</style>