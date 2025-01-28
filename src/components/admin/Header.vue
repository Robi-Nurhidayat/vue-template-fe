<script setup>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const store = useUserStore();

const isShowBtnLogout = ref(false);

const toggleLogout = () => {

  isShowBtnLogout.value = !isShowBtnLogout.value;
}

const router = useRouter();


const logout = () => {
  store.logout();

  if(!store.state.name) {
    router.push("/login")
    isShowBtnLogout.value = !isShowBtnLogout.value;
  }
}

</script>

<template>
    <header class="col-start-3 col-span-10 p-2 flex items-center">

        <nav class="flex justify-between items-center px-10 w-full">

            <div class="text-2xl cursor-pointer" @click="toggleShowSidebar">
                <span class="pi pi-align-justify"></span>
            </div>
            <ul class="flex gap-x-5  items-center">
                <li
                    class="flex justify-center items-center rounded relative cursor-pointer bg-[rgba(165,148,249,0.21)] w-[35px] h-[35px]">
                    <span class="pi pi-comment text-lg text-[#210f7e]"></span>
                    <span
                        class="text-sm bg-[#A594F9] w-[25px] h-[25px] text-white font-semibold flex justify-center items-center rounded-full absolute -top-3 -right-3">7</span>
                </li>
                <li
                    class="flex justify-center items-center rounded relative cursor-pointer bg-[rgba(165,148,249,0.21)] w-[35px] h-[35px]">
                    <span class="pi pi-bell text-lg text-[#210f7e]"></span>
                    <span
                        class="text-sm bg-[#A594F9] w-[25px] h-[25px] text-white font-semibold flex justify-center items-center rounded-full absolute -top-3 -right-3">3</span>
                </li>
                <li class="relative cursor-pointer flex items-center gap-x-2">
                    Hello, {{ store.state.name }} <span @click="toggleLogout" class="pi pi-cog cursor-pointer"></span>
                
                    <div v-if="isShowBtnLogout" class="absolute -bottom-10">
                    <button @click="logout"
                        class="bg-blue-500 rounded hover:bg-blue-600 px-5 py-2 text-white font-medium">Logout</button>
                </div>
                </li>
                
            </ul>
        </nav>
    </header>
</template>