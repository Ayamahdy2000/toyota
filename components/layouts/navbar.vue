<template>
  <div class="container">
    <Disclosure as="nav" class="bg-white pt-6 pb-6" v-slot="{ open }">
      <div class="relative flex items-center justify-between">
        <div class="flex flex-1 items-center">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="h-8 md:h-12 w-auto"
              src="../../assets/images/logo.svg"
              alt="logo"
            />
          </div>
          <div class="hidden ml-auto lg:block">
            <div class="flex space-x-6 xl:space-x-12">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="hover:text-primary-500 uppercase font-inter text-lg"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>

        <div class="items-center lg:flex">
          <button type="button" class="relative px-4 lg:px-8 xl:px-16">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View Search</span>
            <MagnifyingGlassIcon class="h-5 w-5 stroke-3" aria-hidden="true" />
          </button>
          <button
            class="hidden lg:flex bg-primary-500 text-white rounded-2xl pt-4 pb-4 px-7 text-sm font-interBold"
          >
            Get Quote
          </button>
        </div>
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-5 w-5" aria-hidden="true" />
            <XMarkIcon v-else class="block h-5 w-5" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="space-y-1 px-2 pb-3 pt-6">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            class="block hover:text-primary-500 uppercase font-inter text-md md:text-lg py-4"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >

          <button
            class="bg-primary-500 text-white rounded-2xl pt-4 pb-4 px-7 text-sm font-interBold block"
          >
            Get Quote
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Products", href: "#", current: true },
  { name: "Services", href: "#", current: false },
  { name: "Training", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];
</script>
