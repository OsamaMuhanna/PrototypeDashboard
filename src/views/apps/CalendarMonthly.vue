<template>
  <CalendarApp1></CalendarApp1>
</template>
 
<script lang="ts">
import { defineComponent } from "vue";
import CalendarApp1 from "@/components/calendar/CalendarApp1.vue";
import MultiMonth from "@/components/calendar/MultiMonth.vue";
 
export default defineComponent({
  name: "apps-calendar-monthly",
  components: {
    CalendarApp1,
  },
});
</script>