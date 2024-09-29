<script setup>
import { reactive,ref } from 'vue';
import Navbar from './Navbar.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter()

const form = reactive({
  title: '',
  body: '',
})


const isdisable = ref(false)

const submitForm = async () => {
  isdisable.value = true
  try {
    
    if (form.title == '' && form.body == '') throw 'Fields can\'t be empty'
    if (form.title == '') throw 'Title can\'t be empty'
    if (form.body == '') throw 'Form can\'t be empty'

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {title : form.title, body : form.body})
    const blogId = response.data.id
    // alert('sucessful')
    

    form.title = '',
    form.body = ''
    setTimeout(() => {
      alert('Your post was successful') 
    }, 100);


    router.push(`/posts/${blogId}`)

  } catch (error) {
    alert(error)
    // alert('Your post wasn\'t successful')
  } finally{
    isdisable.value = false
  }
}

</script>

<template>
  <Navbar />
  <form @submit.prevent="submitForm" class="font-poppins text-black text-xl text-justify mx-3 sm:mx-20 lg:max-2xl:mx-32">
    <input type="text" class="block mt-9 border border-neutral-400 bg-slate-100 w-4/5 mx-auto p-2 outline-none focus:border-sky-950" placeholder="Blog title" v-model="form.title">
    <textarea class="border border-neutral-400 bg-neutral-50 w-4/5 h-60 block mx-auto mt-3 p-2 resize-none outline-none focus:border-sky-950" placeholder="Type your blog here" v-model="form.body"></textarea>
    <button class="bg-sky-800 rounded py-2 px-4 block m-auto mt-5 text-white focus:border-gray-400" :disabled="isdisable" :class="{ 'cursor-not-allowed bg-sky-400': isdisable }">Post</button>
  </form>
</template>
