<template>
  <header
    class="
      h-16
      w-full
      rounded-t-2xl
      bg-gradient-to-r
      from-violet-200
      to-magenta-200
      flex
      items-end
    "
  >
    <div class="mb-2 flex items-center px-3 w-full">
      <ChevronLeft class="text-white mr-2" />
      <img
        src="/images/avatar.jpg"
        width="24"
        height="24"
        class="rounded-full border border-white mr-1"
        alt=""
      />
      <div class="flex flex-col flex-1">
        <span class="text-white text-[10px]">Samuel Green</span>
        <span class="text-violet-100 text-[8px]">Available to Walk</span>
      </div>
      <div class="flex flex-col">
        <span class="block h-[2px] w-[2px] bg-white mb-[2px]"></span>
        <span class="block h-[2px] w-[2px] bg-white mb-[2px]"></span>
        <span class="block h-[2px] w-[2px] bg-white"></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import ChevronLeft from "./ChevronLeft.vue";
</script>
