<template>
  <div class="generic-empty-state">
    <img
      :src="`/images/${img}.png`"
      class="w-1/3 mx-auto"
      alt="empty image"
    />
    <p class="font-interBold text-md text-center mt-5">{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: ["img", "text"],
};
</script>
