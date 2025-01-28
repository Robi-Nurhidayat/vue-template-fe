<script setup>

import OrderIcon from '../../assets/order.svg';
import UserIcon from '../../assets/user.svg';</script>

<template>
    <div class="mb-5">
        <h1 class="text-gray-800 font-semibold">Dashboard</h1>
        <h5 class="text-gray-600">Welcome to Dashboard Page Robi Nurhidayat !</h5>
    </div>


    <div class="flex gap-7 flex-wrap">


        <!-- orders -->
        <div class="w-[330px] h-[172px] bg-white rounded shadow flex justify-center items-center">
            <div class="flex items-center gap-x-5">
                <div class="w-[90px] bg-[rgba(253,87,87,0.25)] rounded-full">
                    <img :src="OrderIcon" alt="icon-order-dashboard" class="">
                </div>
                <div>
                    <h5 class="font-bold text-[40px] ">10</h5>
                    <span>Total Orders</span>
                </div>
            </div>
        </div>

        <!-- user -->
        <div class="w-[330px] h-[172px] bg-white rounded shadow flex justify-center items-center">
            <div class="flex items-center gap-x-5">
                <div class="w-[90px] bg-[rgba(253,87,87,0.25)] rounded-full">
                    <img :src="UserIcon" alt="icon-order-dashboard" class="">
                </div>
                <div>
                    <h5 class="font-bold text-[40px] ">10</h5>
                    <span>Total users</span>
                </div>
            </div>
        </div>



    </div>
</template>