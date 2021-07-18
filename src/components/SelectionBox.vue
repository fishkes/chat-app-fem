<template>
  <div
    class="
      flex
      items-center
      w-40
      h-8
      bg-gradient-to-r
      from-magenta-200
      to-violet-200
      rounded-lg
      p-[10px]
      mb-[10px]
    "
  >
    <div class="rounded-full border border-magenta-100 w-3 h-3"></div>
    <span class="text-white text-[8px] ml-2">{{ text }}</span>
    <span class="ml-auto text-white text-xs font-semibold">${{ price }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
