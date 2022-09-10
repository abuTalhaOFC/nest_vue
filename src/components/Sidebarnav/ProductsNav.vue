<template>
  <accordion
    title="Products"
    :icon="['fa', 'fa-bag-shopping']"
  >
    <ul class="leading-7 list-disc cursor-pointer">
      <li>
        <h3>Product list</h3>
      </li>
      <li>
        <h3>Product Grid</h3>
      </li>
      <li>
        <h3>Product Grid2</h3>
      </li>
      <li>
        <h3>Categories  </h3>
      </li>
    </ul>
  </accordion>
</template>

<script>
import Accordion from '@/components/Shared/Accordion.vue';

export default{
    name: "ProductsNav",
    components:{
        Accordion,
    }

  }
</script>