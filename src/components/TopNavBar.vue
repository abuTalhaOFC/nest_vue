<template>
  <header :class="['fixed', 'h-20', 'top-0', 'right-0', headerHeightClass]">
    <div
      class="h-20 flex flex-row justify-between w-full items-center border-b bg-white border-gray-200 px-9 py-4"
    >
      <!-- serach section start -->
      <div>
        <form>
          <div
            class="flex overflow-hidden flex-row text-sm h-10 items-center bg-gray-100 border border-gray-200 rounded"
          >
            <div class="">
              <input
                placeholder="Search item"
                type="text"
                class="focus:outline-none p-2 w-60 bg-gray-100 focus:bg-white"
              />
            </div>
            <div
              class="flex cursor-pointer flex-row items-center border-l w-16 bg-gray-100 h-10 border-gray-200 text-gray-400 hover:bg-green-600 hover:border-green-600 hover:text-white"
            >
              <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                class="pl-3 text-base"
              />
            </div>
          </div>
        </form>
      </div>
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
