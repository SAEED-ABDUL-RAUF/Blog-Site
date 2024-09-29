<script setup>

</script>

<template>
  <header class="flex justify-between items-center px-3 py-5 shadow sticky top-0 z-50 sm:px-10 sm:max-xl:py-5 lg:max-2xl:px-14 lg:max-2xl:py-7 lg:max-2xl:text-2xl bg-white">
    <div>
      <i class="fa-solid fa-blog text-xl sm:text-4xl lg:max-2xl:text-5xl"></i>
    </div>
    <div class="flex item-center gap-2 font-semibold w-max lg:max-xl:text-sm">
      <RouterLink to="/" class="border-b-2 border-white duration-500 hover:border-black hover:duration-500">Home</RouterLink>
      <RouterLink to="/about" class="border-b-2 border-white duration-500 hover:border-black hover:duration-500">About</RouterLink>
      <RouterLink to="/blog" class="border-b-2 border-white duration-500 hover:border-black hover:duration-500"><i class="fa-solid fa-plus"></i></RouterLink>
    </div>
  </header>
</template>