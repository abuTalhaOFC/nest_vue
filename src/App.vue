<template>
  <div>
    <div class="z-10">
      <side-bar-nav />
      <top-nav-bar />
    </div>

    <div :class="['mt-20', leftMArginClass]">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBarNav from "@/components/SideBarNav.vue";
import TopNavBar from "@/components/TopNavBar.vue";

export default {
  name: "App",
  components: {
    SideBarNav,
    TopNavBar,
  },
  computed: {
    leftMArginClass() {
      return {
        "ml-72": this.isMenuSidebarExpend,
        "ml-20": !this.isMenuSidebarExpend,
      };
    },
    isMenuSidebarExpend() {
      return this.$store.state.isMenuSidebarExpend;
    },
  },
};
</script>
