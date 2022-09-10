<template>
  <header :class="['fixed', 'right-0', headerHeightClass]">
    <div
      class="h-20 flex flex-row justify-between w-full items-center border-b border-gray-200 px-9 py-4"
    >
      <!-- serach section start -->
      <div><h1>serch</h1></div>
      <!-- serach section end -->

      <!-- user+language+darkmood+notification section start -->
      <div><h1>etc</h1></div>
      <!-- user+language+darkmood+notification section end -->
    </div>
  </header>
</template>

<script>
export default {
  name: "TopNavBar",
  computed: {
    headerHeightClass() {
      return {
        "left-72": this.isMenuSidebarExpend,
        "left-20": !this.isMenuSidebarExpend,
      };
    },
    isMenuSidebarExpend() {
      return this.$store.state.isMenuSidebarExpend;
    },
  },
};
</script>
