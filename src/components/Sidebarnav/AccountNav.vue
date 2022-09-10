<template>
  <accordion title="Account">
    <ul class="leading-7 list-disc cursor-pointer">
      <li>
        <h3>User login</h3>
      </li>
      <li>
        <h3>User Registration</h3>
      </li>
      <li>
        <h3>Error 404</h3>
      </li>
    </ul>
  </accordion>
</template>

<script>
import Accordion from '@/components/Shared/Accordion.vue';

export default{
    name: "AccountNav",
    components:{
        Accordion,
    }

  }
</script>