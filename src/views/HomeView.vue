<script setup>
  import Navbar from '@/components/Navbar.vue';
  import BlogList from '@/components/BlogList.vue';
  import axios from 'axios'
  import { onMounted,reactive } from 'vue';
  const blog_data = reactive({
    posts: [],
    isLoading: true
  })
  
  onMounted(async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // console.log(response.data)
      blog_data.posts = response.data
      blog_data.isLoading = false
      console.log(blog_data.posts)
    } catch (error) {
      console.log(error)
      
    }
  })
</script>

<template>
    <Navbar />
    <p v-if="blog_data.isLoading">loading....</p>
    <BlogList v-else v-for="post in blog_data.posts" :key="post" :post="post" />
</template>
