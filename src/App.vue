<template>
  <side-bar-nav />
  <dashboard />
</template>

<script>

import Dashboard from "@/components/Dashboard.vue";
import SideBarNav from '@/components/SideBarNav.vue';

export default {
  name: "App",
  components: {
    Dashboard,
    SideBarNav,
  },
};
</script>


