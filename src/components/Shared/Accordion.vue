<template>
  <div class="flex flex-col">
    <div
      class="flex flex-row w-full items-center cursor-pointer p-3 bg-white rounded mb-1 hover:bg-gray-200 justify-center"
      @click="open"
    >
      <!-- left icon start -->
      <div class="pr-3 flex justify-center items-center">
        <font-awesome-icon
          :icon="icon"
          class="text-gray-400 text-2xl"
        />
      </div>
      <!-- left icon end -->

      <!-- title @ arrow start -->

      <div
        v-if="isMenuSidebarExpend"
        class="flex flex-row w-full justify-between"
      >
        <div>
          <h2 class="text-gray-800 text-sm font-semibold">
            {{ title }}
          </h2>
        </div>

        <div class="flex items-center">
          <font-awesome-icon
            :icon="changeArrowStyle"
            class="pr-3 text-gray-400"
          />
        </div>
      </div>
      <!-- title @ arrow end-->
    </div>
    <!-- end of accordion section -->

    <!-- slot -->
    <div v-if="isMenuSidebarExpend">
      <div
        v-if="isOpen"
        class="ml-12 my-2"
      >
        <slot>I Need Data</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: Array,
      required: false,
      default: () => {
        return ["fa", "fa-house"];
      },
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    changeArrowStyle() {
      return !this.isOpen
        ? ["fa-solid", "fa-caret-down"]
        : ["fa-solid", "fa-caret-up"];
    },
    isMenuSidebarExpend() {
      return this.$store.state.isMenuSidebarExpend;
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
