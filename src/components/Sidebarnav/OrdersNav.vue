<template>
  <accordion title="Orders">
    <ul class="leading-7 list-disc cursor-pointer">
      <li>
        <h3>Orders list 1</h3>
      </li>
      <li>
        <h3>Orders list 2</h3>
      </li>
      <li>
        <h3>Orders details</h3>
      </li>
    </ul>
  </accordion>
</template>

<script>
import Accordion from '@/components/Shared/Accordion.vue';

export default{
    name: "OrdersNav",
    components:{
        Accordion,
    }

  }
</script>