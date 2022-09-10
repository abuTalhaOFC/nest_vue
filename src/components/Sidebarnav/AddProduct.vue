<template>
  <accordion
    title="Add product"
    :icon="['fa', 'fa-square-plus']"
  >
    <ul class="leading-7 list-disc cursor-pointer">
      <li>
        <h3>Add product 1</h3>
      </li>
      <li>
        <h3>Add product 2</h3>
      </li>
      <li>
        <h3>Add product 3</h3>
      </li>
      <li>
        <h3>Add product 4</h3>
      </li>
    </ul>
  </accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "AddProductNav",
  components: {
    Accordion,
  },
};
</script>
