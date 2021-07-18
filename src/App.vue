<template>
  <div
    class="
      h-screen
      container
      flex flex-col
      lg:flex-row
      items-center
      lg:justify-center
    "
  >
    <Slice />
    <Slice :top="false" :dark="false" />
    <Phone />
    <div class="mt-16 text-center lg:text-left relative z-10 max-w-md">
      <h1 class="text-3xl lg:text-4xl font-semibold text-violet-400 mb-6">
        Simple Booking
      </h1>
      <p class="text-grey-300 mb-14 text-base lg:text-lg">
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangements and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Phone from "./components/Phone.vue";
import Slice from "./components/Slice.vue";
export default defineComponent({
  components: { Phone, Slice },
  data: () => ({})
});
</script>
