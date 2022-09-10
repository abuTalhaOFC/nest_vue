<template>
  <non-accordion-nav-opt
    title="Starter page"
    :icon="['fa', 'fa-tag']"
  />
</template>

<script>
import NonAccordionNavOpt from "@/components/Shared/NonAccordionNavOpt.vue";

export default {
  name: "StarterPageNav",
  components: {
    NonAccordionNavOpt,
  },
};
</script>
