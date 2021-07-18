<template>
  <div
    class="
      phone
      rounded-3xl
      bg-white
      shadow-xl
      border-[10px] border-white
      relative
      z-10
      min-w-[246px] min-h-[506px]
      overflow-hidden
      lg:ml-8 lg:mr-32
    "
  >
    <Nudge />
    <Header />
    <div class="chat bg-grey-100 p-[10px]">
      <SpeechBubble
        >That sounds great. I’d be happy to discuss more.</SpeechBubble
      >
      <SpeechBubble
        >Could you send over some pictures of your dog, please?</SpeechBubble
      >
      <div class="flex justify-end full-width space-x-3 mt-4 mb-[10px]">
        <img :src="dog1" width="40" height="40" class="rounded-lg" />
        <img :src="dog2" width="40" height="40" class="rounded-lg" />
        <img :src="dog3" width="40" height="40" class="rounded-lg" />
      </div>
      <SpeechBubble :me="false"
        >Here are a few pictures. She’s a happy girl!</SpeechBubble
      >
      <SpeechBubble :me="false">Can you make it?</SpeechBubble>
      <SpeechBubble
        >She looks so happy! The time we discussed works. How long shall I take
        her out for?</SpeechBubble
      >
      <SelectionBox text="30 minute walk" price="29" />
      <SelectionBox text="1 hour walk" price="49" />

      <div class="send-message relative">
        <input
          type="text"
          class="h-8 w-full rounded-full bg-white pl-3 pr-9 text-[8px]"
          placeholder="Type a message..."
        />
        <div
          class="
            absolute
            right-2
            top-1
            rounded-full
            w-6
            h-6
            bg-violet-400
            text-white
            flex
            items-center
            justify-center
          "
        >
          <ChevronRight class="w-3 h-3" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Nudge from "./Nudge.vue";
import Header from "./Header.vue";
import SpeechBubble from "./SpeechBubble.vue";
import SelectionBox from "./SelectionBox.vue";
import ChevronRight from "./ChevronRight.vue";
import dog1 from "../assets/dog-image-1.jpg";
import dog2 from "../assets/dog-image-2.jpg";
import dog3 from "../assets/dog-image-3.jpg";
</script>
