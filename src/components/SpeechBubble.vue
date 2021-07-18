<template>
  <div
    class="
      speech-bubble
      p-[6px]
      rounded-lg
      text-[8px] text-violet-400
      w-32
      shadow-sm
      mb-[10px]
    "
    :class="{ 'bg-violet-50': me, 'bg-white ml-auto ': !me }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    me: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
