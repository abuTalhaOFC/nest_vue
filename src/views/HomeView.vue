<template>
  <div class="bg-gray-100 w-full p-16 h-screen">
    <dashbord />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashbord from "@/components/Dashbord.vue";

export default {
  name: "HomeView",
  components: {
    Dashbord,
  },
};
</script>
