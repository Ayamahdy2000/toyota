<template>
 
    <navbar />
    <slot />
  
</template>
<script>
import navbar from "../components/layouts/navbar.vue";
export default {
  components: {
    navbar,
  },
};
</script>
