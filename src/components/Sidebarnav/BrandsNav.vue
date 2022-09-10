<template>
  <non-accordion-nav-opt
    title="Brands"
    :icon="['fa', 'fa-star']"
  />
</template>

<script>
import NonAccordionNavOpt from "@/components/Shared/NonAccordionNavOpt.vue";

export default {
  name: "BrandsNav",
  components: {
    NonAccordionNavOpt,
  },
};
</script>
