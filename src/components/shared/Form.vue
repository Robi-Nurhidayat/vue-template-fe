<script setup>
import { reactive } from 'vue';



const state = reactive({
    data1: '',
    data2: ''
})

</script>

<template>

<section class="flex justify-center items-center h-screen bg-gray-100">
    <div class=" w-[500px] border bg-white px-5 pt-5 pb-6 rounded">
        <h1 class="mb-10 text-3xl font-semibold text-center text-gray-800">Form Add</h1>
        <form @submit.prevent="" class="flex flex-col gap-y-2">

            <div class="flex flex-col gap-y-1">
                <label for="email " class="text-2xl text-gray-800">Data 1</label>
                <input type="text" v-model="state.data1" class="outline-none border px-2 py-2 rounded text-lg text-gray-600">
            </div>
            <div class="flex flex-col gap-y-1">
                <label for="password " class="text-2xl text-gray-800">Data 2</label>
                <input type="text" v-model="state.data2" class="outline-none border px-2 py-2 rounded text-lg text-gray-600">
            </div>
            <div class="pt-4">
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 w-full py-2 text-white text-2xl font-semibold rounded">Save</button>
            </div>
        </form>
    </div>
</section>
</template>