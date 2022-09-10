<template>
  <accordion
    title="Settings"
    :icon="['fa', 'fa-gear']"
  >
    <ul class="leading-7 list-disc cursor-pointer">
      <li>
        <h3>Setting sample 1</h3>
      </li>
      <li>
        <h3>Satting sample 2</h3>
      </li>
    </ul>
  </accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "SettingsNav",
  components: {
    Accordion,
  },
};
</script>
