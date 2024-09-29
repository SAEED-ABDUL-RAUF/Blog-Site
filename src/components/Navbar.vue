<script setup>

</script>

<template>
  <header class="flex justify-between items-center px-3 py-5 shadow sticky top-0 z-50 sm:max-xl:px-10 sm:max-xl:p-5 bg-white">
    <div>
      <i class="fa-solid fa-blog text-xl sm:max-2xl:text-4xl"></i>
    </div>
    <div class="flex item-center gap-2 font-semibold w-max lg:max-xl:text-2xl">
      <RouterLink to="/" class="border-b-2 border-white duration-500 hover:border-black hover:duration-500">Home</RouterLink>
      <RouterLink to="/about" class="border-b-2 border-white duration-500 hover:border-black hover:duration-500">About</RouterLink>
      <RouterLink to="/blog" class="border-b-2 border-white duration-500 hover:border-black hover:duration-500"><i class="fa-solid fa-plus"></i></RouterLink>
    </div>
  </header>
</template>