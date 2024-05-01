<template>
  <div class="container">
    <main class="mt-10 md:mt-20 xl:mt-40">
      <div class="filter flex flex-wrap md:-me-4 mb-9">
        <div
          class="xl:w-1/4 md:w-1/3 w-full md:pe-4 mb-4 md:mb-0"
          v-for="(item, index) in state.filter['Select-Type']"
          :key="index"
        >
          <selected
            :item="item"
            :index="index"
            v-model="state.selectedType[index]"
            @getSelectedValue="getSelectedValue"
          />
        </div>
        <div
          class="xl:w-1/4 md:w-1/3 w-full md:pe-4 mb-4 md:mb-0"
          v-for="(item, index) in state.filter['Numeric-Type']"
          :key="index"
        >
          <range
            :item="item"
            min="0"
            max="12000"
            :index="index"
            v-model="state.rangeValues[index]"
            @getRangeValue="getRangeValue"
          />
        </div>
      </div>

      <div class="flex flex-wrap md:-me-2 justify-end mb-4">
        <div v-for="(item, index) in state.selectedType" :key="index">
          <div
            v-if="item"
            class="border border-primary-500 rounded-md px-5 py-4 mb-4 me-4"
          >
            <p class="items-center text-primary-500 text-sm font-inter flex">
              {{ item.itemName }} :{{ item?.name }}

              <span class="ms-5"
                ><XMarkIcon
                  class="w-2.5 h-2.5 stroke-2 cursor-pointer mt-0.5"
                  @click="clearSelectedType(index)"
              /></span>
            </p>
          </div>
        </div>
        <div
      
          v-for="(item, index) in state.rangeValues"
          :key="index"
        >
          <div
            v-if="item"
            class="border border-primary-500 rounded-md px-5 py-4 mb-4 me-4"
          >
            <p class="items-center text-primary-500 text-sm font-inter flex">
              {{ item.itemName }} :{{ item?.value }}

              <span class="ms-5"
                ><XMarkIcon
                  class="w-2.5 h-2.5 stroke-2 cursor-pointer mt-0.5"
                  @click="clearRangeValue(index)"
              /></span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center md:-me-7 -mb-7">
        <div
          class="xl:w-1/4 md:w-1/3 w-full pb-7 md:pe-7"
          v-for="(item, index) in state.products"
          :key="index"
        >
          <card :item="item" />
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Card from "../components/card.vue";
import { getAllProducts, getFilters } from "../services/product";
import { reactive, onMounted } from "vue";
import Selected from "~/components/filters/selected.vue";
import Range from "~/components/filters/range.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
export default {
  components: { Card, Selected, Range, XMarkIcon },
  setup() {
    const state = reactive({
      products: [],
      filter: {},
      selectedType: [],
      rangeValues: [],
    });

    const getProducts = async () => {
      const params = {};
      state.selectedType.forEach((el, index) => {
        params[`filter[selectTypes][${index}][id]`] = el.id;
        params[`filter[selectTypes][${index}][value]`] = el.value;
        params[`filter[selectTypes][${index}][is_multi]`] = false;
      });
      state.rangeValues.forEach((el, index) => {
        params[`filter[numericTypes][${index}][id]`] = el.id;
        params[`filter[numericTypes][${index}][from]`] = 0;
        params[`filter[numericTypes][${index}][to]`] = el.value;
      });
      await getAllProducts(params).then((res) => {
        state.products = res.data.data;
      });
    };
    const getProductsFilter = async () => {
      await getFilters().then((res) => {
        state.filter = res.data.data;
        state.filter["Select-Type"].splice(1, 1);
      });
    };
    const getSelectedValue = (val) => {
      state.selectedType[val.index] = {
        id: state.filter["Select-Type"][val.index].id,
        value: val.value,
        name: val.name,
        itemName: val.itemName,
      };

      getProducts();
    };
    const getRangeValue = (val) => {
      if (val.value != 0) {
        state.rangeValues[val.index] = {
          id: state.filter["Numeric-Type"][val.index].id,
          value: val.value,
          itemName: val.itemName,
        };
      } else {
        state.rangeValues.splice(val.index, 1);
      }
      getProducts();
    };
    const clearSelectedType = (index) => {
      state.selectedType.splice(index, 1);
      getProducts();
    };
    const clearRangeValue = (index) => {
      state.rangeValues.splice(index, 1);
      getProducts();
    };
    onMounted(() => {
      getProductsFilter();
      getProducts();
    });
    return {
      state,
      getSelectedValue,
      getRangeValue,
      clearSelectedType,
      clearRangeValue,
    };
  },
};
</script>
