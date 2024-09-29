<script setup>
import About from '@/components/About.vue';
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
const num = ref(0)
function addNumber() {
    num.value++
}
</script>

<template>
    <Navbar />
    <About />
</template>
