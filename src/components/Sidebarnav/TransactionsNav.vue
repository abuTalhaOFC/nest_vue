<template>
  <accordion
    title="Transactions"
    :icon="['fa', 'fa-sack-dollar']"
  >
    <ul class="leading-7 list-disc cursor-pointer">
      <li>
        <h3>Transaction 1</h3>
      </li>
      <li>
        <h3>Transaction 2</h3>
      </li>
    </ul>
  </accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "TransactionsNav",
  components: {
    Accordion,
  },
};
</script>
