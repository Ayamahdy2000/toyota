<template>
  <div class="product-card justify-between flex flex-col">
    <main>
      <div class="product-card__img">
        <img :src="item.featured_image" :alt="item.name" />
      </div>
      <h3 class="mt-5 text-primary-500 font-interMedium text-md uppercase">
        {{ item.name }}
      </h3>
      <p class="mt-2.5 font-interMedium text-md mb-0">{{item.code}}</p>
      <p class="font-interMedium text-md mt-2.5">
        Capacity: <span class="text-primary-500">{{item.numericTypes[0].value}}</span>
      </p>
    </main>
    <footer>
      <button
        class="bg-primary-500 mt-5 uppercase text-white rounded-2xl pt-4 pb-4 px-7 text-sm font-interBold block w-full"
      >
        VIEWPRODUCT
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
