<script setup>
import axios from 'axios';
import { reactive,onMounted } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';
  
  const blog = reactive({
    post: {},
    isLoading: true
  })

  const route = useRoute()
  const blogId = route.params.id
  
  onMounted(async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
      blog.post = response.data
      console.log(blog.post)
    } catch (error) {
      console.log(error)
    
    } finally {
      blog.isLoading = false
    }
  })

  
</script>

<template>
      <p v-if="blog.isLoading">loading....</p>
      <div v-else class="p-2 mt-2 mx-2">
         <h1 class="capitalize font-semibold font-poppins text-2xl">{{ blog.post.title }}</h1>
         <p>{{ blog.post.body }}</p>
      </div>
</template>