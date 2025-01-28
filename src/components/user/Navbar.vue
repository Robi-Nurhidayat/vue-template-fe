<script setup>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';



const store = useUserStore();

const isShowBtnLogout = ref(false);
const triggerButton = ref(null);
const toggleLogout = () => {

  isShowBtnLogout.value = !isShowBtnLogout.value;
}

const router = useRouter();


const logout = () => {
  store.logout();

  if(!store.state.name) {
    router.push("/")
    isShowBtnLogout.value = !isShowBtnLogout.value;
  }
}


</script>


<template>

<header>

    <nav class="px-10 py-4 bg-[#638C6D] flex justify-between items-center">

        <!-- logo -->
         <div>
            <a href="#" class="text-2xl text-white font-bold">Logo</a>
         </div>


         <!-- nav links -->
          <ul class="flex gap-x-4 text-xl text-white font-medium">
            <li class="hover:text-gray-300"><a href="#">Home</a></li>
            <li class="hover:text-gray-300"><a href="#">About</a></li>
            <li class="hover:text-gray-300"><a href="#">Product</a></li>
            <li class="hover:text-gray-300"><a href="#">Contact US</a></li>
          </ul>

          <!-- button login/register -->
        
          <div class="flex items-center gap-x-5 relative">

            <span v-if="store.state.name" class="text-white text-lg  relative">

              welcome <span class="font-medium ml-1">{{ store.state.name }} <span ref="triggerButton" @click="toggleLogout" class="pi pi-cog cursor-pointer text-[25px] absolute top-1 ml-1"></span></span>
            </span>

            <div v-if="isShowBtnLogout" class="absolute -bottom-10">
              <button @click="logout"  class="bg-blue-500 rounded hover:bg-blue-600 px-5 py-2 text-white font-medium">Logout</button>
            </div>


            <!-- button login/reg -->
            <RouterLink v-if="!store.state.name" to="/login" class="bg-white hover:bg-[#16404D] hover:text-white px-5 text-xl text-gray-900 font-medium rounded py-2">Login</RouterLink>
            <RouterLink v-if="!store.state.name" to="/register" class="bg-white hover:bg-[#16404D] hover:text-white px-5 text-xl text-gray-900 font-medium rounded py-2">Register</RouterLink>
          </div>
          
    </nav>

</header>

</template>