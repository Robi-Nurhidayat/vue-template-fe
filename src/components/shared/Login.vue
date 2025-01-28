<script setup>

import { useUserStore } from '@/stores/user';
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';


const data = reactive({
    email: '',
    password: ''
})

const user = reactive({
    name: "",
    role: "",
    access_token: ""
})

const store = useUserStore();

const router = useRouter();

const onSubmit = async () => {


    try {
        const response = await axios.post("http://localhost:8000/api/auth/login", {
            email: data.email,
            password: data.password
        })


        if (response.data.data) {

            user.name = response.data.data.name
            user.role = response.data.data.role
            user.access_token = response.data.access_token;

            store.updateName(user)
            if (response.data.data.role == "user") {
                return router.push("/")
            }

            if (response.data.data.role == "admin") {
                return router.push("/admin")
            }
        }

    } catch (error) {
        console.log(error)
    }
}
</script>

<template>

    <section class="flex justify-center items-center h-screen bg-gray-100">
        <div class=" w-[500px] border bg-white px-5 pt-5 pb-6 rounded">
            <h1 class="mb-10 text-3xl font-semibold text-center text-gray-800">Login Dahulu</h1>
            <form @submit.prevent="onSubmit" class="flex flex-col gap-y-2">

                <div class="flex flex-col gap-y-1">
                    <label for="email " class="text-2xl text-gray-800">Email</label>
                    <input type="text" v-model="data.email"
                        class="outline-none border px-2 py-2 rounded text-lg text-gray-600">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label for="password " class="text-2xl text-gray-800">Password</label>
                    <input type="password" v-model="data.password"
                        class="outline-none border px-2 py-2 rounded text-lg text-gray-600">
                </div>
                <div class="pt-4">
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-600 w-full py-2 text-white text-2xl font-semibold rounded">Login</button>
                </div>
            </form>

            <div class="mt-2">
                <p>belum punya akun ? <RouterLink to="/register" class="underline">daftar terlebih dahulu</RouterLink></p>
            </div>
        </div>
    </section>

</template>