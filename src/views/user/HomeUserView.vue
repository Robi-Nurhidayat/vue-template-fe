<script setup>
import Navbar from '@/components/user/Navbar.vue';
import { useUserStore } from '@/stores/user';


const user = useUserStore();

</script>

<template>
    <Navbar />

<div>
    {{ user.name }}
</div>
</template>