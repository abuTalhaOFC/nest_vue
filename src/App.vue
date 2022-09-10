<template>
  <div>
    <side-bar-nav />
    <top-nav-bar />
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
};
</script>
