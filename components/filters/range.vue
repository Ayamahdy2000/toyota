<template>
  <div class="card-filter">
    <h3 class="font-inter text-sm mb-5">{{ item.name }}</h3>
    <input
      type="range"
      class="slider"
      :min="min"
      :max="max"
      @mouseup="getRangeValue"
      @input="updateRangeColor"
      v-model="state.range"
    />

    <div class="flex justify-between mt-4 items-center">
      <div class="range-value font-inter text-sm">{{ min }} kg</div>
      <div class="range-dash"></div>
      <div class="range-value font-inter text-sm">{{ max }} kg</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "min", "max", "index", "modelValue"],
  emits: ["getRangeValue"],
  setup(props, context) {
    const state = reactive({
      range: props.modelValue ? props.modelValue.value : 0,
    });

    const getRangeValue = () => {
      context.emit("getRangeValue", {
        index: props.index,
        value: state.range,
        itemName: props.item.name,
      });
    };
    const updateRangeColor = () => {
      const slider = document.querySelector(".slider");
      const value = (state.range / slider.max) * 100;

      slider.style.background = `linear-gradient(to right, #C00F23 ${value}%, #FF141433 ${value}%)`;
    };
    watch(
      () => props.modelValue,
      () => {
        state.range = props.modelValue ? props.modelValue.value : 0;
        updateRangeColor();
      }
    );

     
   return {
      getRangeValue,
      state,
      updateRangeColor
    };
  },
};
</script>
