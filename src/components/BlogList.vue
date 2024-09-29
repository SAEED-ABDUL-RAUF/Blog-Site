<script setup>
  import { computed } from 'vue';
import { RouterLink } from 'vue-router';
  
  const props = defineProps({
    post: Object
  })

  const sliced_content = computed(() => {
    return props.post.body.slice(0, 100) + '...'
  })

</script>

<template>
    <ul class="p-2 mt-2 shadow mx-2 text-justify sm:mx-40 lg:max-xl:mx-72 xl:mx-96 ">
         <RouterLink :to="'/posts/' + post.id" class="font-semibold font-poppins text-xl capitalize w-2/4 block overflow-hidden whitespace-nowrap text-ellipsis">{{ post.title }}</RouterLink>
         <p class="rounded">{{ sliced_content }}</p>
    </ul>
</template>