<script setup>
import { ref } from 'vue';



import Header from '@/components/admin/Header.vue';
import Sidebar from '@/components/admin/Sidebar.vue';
import Footer from '@/components/admin/Footer.vue';
import { RouterView } from 'vue-router';

const showSidebar = ref(true);


const toggleShowSidebar = () => {

  showSidebar.value = !showSidebar.value;

}



</script>


<template>

  <div class="grid grid-cols-12 grid-rows-12 h-screen bg-[#f4f3fc]">
    <!-- Header -->
    <Header /> 

    <!-- sidebar -->
    <Sidebar />
    

    <!-- main content -->
    <div class="row-span-10 col-span-10  px-10 overflow-auto">
      
      <RouterView />
    </div>
    <!-- footer -->
    <Footer />
  </div>


</template>