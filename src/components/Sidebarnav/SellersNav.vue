<template>
  <accordion title="Sellers" :icon="['fa', 'fa-shop']">
    <ul class="leading-7 list-disc cursor-pointer">
      <li>
        <h3>Selles card</h3>
      </li>
      <li>
        <h3>Selles list</h3>
      </li>
      <li>
        <h3>Selles profile</h3>
      </li>
    </ul>
  </accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "SellersNav",
  components: {
    Accordion,
  },
};
</script>
