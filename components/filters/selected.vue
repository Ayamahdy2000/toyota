<template>
  <div class="card-filter">

    <h3 class="font-inter text-sm mb-5">{{ item.name }}</h3>
    <div class="selected-card grid grid-cols-5">
      <div
        class="selected-card__item"
        v-for="(item, index) in item.values"
        :key="index"
        @click="getSelectedValue(item.fields.id,item.fields.name)"
        :class="state.value == item.fields.id ? 'active' : ''"
      >
        <div class="circle"></div>

        <p v-if="index % 2 ==0" class="font-inter text-sm text-center">
          {{ item.fields.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "index", "modelValue"],
  emits: ["getSelectedValue"],
  setup(props, context) {
    const state = reactive({
      value: props.modelValue?.value,
    });
    const getSelectedValue = (val,name) => {
      state.value = val;
      context.emit("getSelectedValue", { index: props.index, value:  state.value , name: name ,itemName:props.item.name });
    };
    watch(
      () => props.modelValue,
      () => {
        state.value = props.modelValue?.value;
      }
    );
    return {
      state,
      getSelectedValue,
    };
  },
};
</script>
