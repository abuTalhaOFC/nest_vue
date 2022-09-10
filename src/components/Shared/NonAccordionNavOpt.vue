<template>
  <div class="flex flex-col">
    <div
      class="flex flex-row w-full items-center cursor-pointer p-3 bg-white rounded mb-1 hover:bg-gray-200 justify-center"
      @click="open"
    >
      <!-- left icon start -->
      <div class="pr-3">
        <font-awesome-icon
          :icon="icon"
          class="text-gray-400 text-2xl"
        />
      </div>
      <!-- left icon end -->

      <!-- title  start -->

      <div
        v-if="isMenuSidebarExpend"
        class="flex flex-row w-full"
      >
        <div>
          <h2 class="text-gray-800 text-sm font-semibold">
            {{ title }}
          </h2>
        </div>
      </div>
      <!-- title  end-->
    </div>
    <!-- end of accordion section -->
  </div>
</template>

<script>
export default {
  name: "NonAccordoonNavOpt",
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
  computed: {
    isMenuSidebarExpend() {
      return this.$store.state.isMenuSidebarExpend;
    },
  },
};
</script>
