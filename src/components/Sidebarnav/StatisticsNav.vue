<template>
  <non-accordion-nav-opt title="Statistics" :icon="['fa', 'fa-chart-pie']" />
</template>

<script>
import NonAccordionNavOpt from "@/components/Shared/NonAccordionNavOpt.vue";

export default {
  name: "StatisticsNav",
  components: {
    NonAccordionNavOpt,
  },
};
</script>
