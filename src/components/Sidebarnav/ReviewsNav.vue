<template>
  <non-accordion-nav-opt
    title="Reviews"
    :icon="['fa', 'fa-message']"
  />
</template>

<script>
import NonAccordionNavOpt from "@/components/Shared/NonAccordionNavOpt.vue";

export default {
  name: "ReviewsNav",
  components: {
    NonAccordionNavOpt,
  },
};
</script>
