<template>
  <div
    class="fixed slice bg-gradient-to-b h-100 lg:h-110 z-0"
    :class="{
      'from-violet-100 to-violet-200': dark,
      'from-grey-100 to-grey-100': !dark,
      'left-0 lg:-left-10 top-0 rounded-br-full lg:rounded-b-full w-48 lg:w-[421px]':
        top,
      'right-0 bottom-0 rounded-tl-full  w-48 lg:w-80': !top
    }"
  />
</template>

<script>
export default {
  props: {
    top: {
      type: Boolean,
      default: true
    },
    dark: {
      type: Boolean,
      default: true
    }
  }
};
</script>
