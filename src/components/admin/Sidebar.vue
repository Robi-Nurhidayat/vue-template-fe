<script setup>
import { RouterLink } from 'vue-router';
import StoreIcon from '../../assets/store.svg';</script>

<template>
    <div class="row-start-1 row-span-12 col-start-1 col-span-2 flex bg-white justify-center shadow-sm">
        <aside class=" w-[80%] h-full ">
            <div class=" relative w-[70px] rounded-full p-4 bg-[rgba(255,82,59,0.29)] mb-10 mt-2">
                <img :src="StoreIcon" alt="store-icon">
                <span class="absolute font-semibold text-[#748E63] left-1 -bottom-5">RobiStore</span>
            </div>

            <ul class="flex flex-col gap-5">
                <li class="flex justify-between items-center cursor-pointer">
                    <RouterLink to="/admin/dashboard" class="text-xl font-medium text-gray-700">Dashboard</RouterLink>
                    <span class="pi pi-home text-xl text-purple-500"></span>
                </li>
                <li class="flex justify-between items-center cursor-pointer">
                    <span class="text-xl font-medium text-gray-700">Data</span>
                    <span class="pi pi-gift text-xl text-purple-500"></span>
                </li>
                <li class="flex justify-between items-center cursor-pointer">
                    <span class="text-xl font-medium text-gray-700">Pelanggan</span>
                    <span class="pi pi-user text-xl text-purple-500"></span>
                </li>
            </ul>
        </aside>
    </div>
</template>