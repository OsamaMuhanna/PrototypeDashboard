<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div v-if="this.index == 0"class="card-header">
      <h2 class="card-title fw-bold">HCM Fusion Project Timeline</h2>

      <div id="KSA1">
 
        <div id="KSA11">
          KSA Definition Phase
        </div>
        <div id="KSA12">
          KSA Conduct Reporting Fit Analysis
        </div>
        <div id="KSA13">
          KSA Complete Recruitment Implementation
        </div>
      </div>
 
      <div id="Other1">
        <div id="other11">
          UAE
        </div>
        <div id="other12">
          Bahrain
        </div>
        <div id="other13">
          Kuwait
        </div>
 
      </div>
      <div id="Other1">
 
        <div id="other14">
          Qatar
        </div>
        <div id="other15">
          Oman
        </div>
      </div>
    </div>
    <div v-if="this.index == 1" class="card-header">
      <h2 class="card-title fw-bold">OneStream Project Timeline</h2>

<div id="KSA1">

<div id="KSA11">
  OneStream Global Design
  </div>
  <div id="KSA12">
 OneStream Technical Design and Build
  </div>
  <div id="KSA13">
OneStream SIT
  </div>
</div>

<div id="other1">
<div id="other11">
OneStreamTraining 
</div>
<div id="other12">
OneStream UAT
</div>
<div id="other13">
OneStream Cutover, Go-Live and Hypercare
</div>

</div>

    </div>

    <div v-if="this.index == 2" class="card-header">
      <h2 class="card-title fw-bold">MullenLowe Project Timeline</h2>

    <div id="KSA1">

<div id="KSA11">
Evaluating Current Data
  </div>
  <div id="KSA12">
 Closing Knowledge Gaps
  </div>
  <div id="KSA13">
Profile Development
  </div>
</div>

<div id="other1">
<div id="other11">
Brand Concept
</div>
<div id="other12">
Concept Test
</div>
<div id="other13">
Brand House
</div>

</div>

<div id="other1">
<div id="other14">
Brand Architecture
</div>
<div id="other15">
Visual System and Consumer
</div>
<div id="other16">
Consumer Journey Creation
</div>

</div>

    </div>
 
    <!--end::Card header-->
 
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Calendar-->
      <FullCalendar :key="componentKey" ref="calendar" class="demo-app-calendar" :options="calendarOptions"></FullCalendar>
      <!--end::Calendar-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
 
  <NewEventModal></NewEventModal>
</template>
 
<script lang="ts">
import { defineComponent, ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import multiMonthPlugin from "@fullcalendar/multimonth";
import interactionPlugin from "@fullcalendar/interaction";
import events from "@/core/data/events"; // Example default events
import eventsOneStream from "@/core/data/eventsOneStream";
import eventsMillenLowe from "@/core/data/eventsMillenLowe";
 
export default defineComponent({
  name: "MultiMonth",
  components: {
    FullCalendar,
  },
  props: {
    index: Number,
  },
  data() {
    return {
      componentKey:1,
      events: [], // Initialize events array
    };
  },
  created() {
    this.loadEvents(); // Initial load of events
  },
  watch: {
    index(newIndex, oldIndex) {
      if (newIndex !== oldIndex) {
        this.loadEvents();
      }
    },
    events: {
      handler() {
        this.updateCalendar();
      },
      deep: true,
    },
  },
  methods: {
    loadEvents() {
      console.log("xxxx");
      console.log(this.index);
      console.log(this.index == 0);
      let temp = [];
      if (this.index ==0) {
        console.log("was 0");
        return events; // Default events
      } else if (this.index == 1) {
        console.log("was 1");
        return eventsOneStream;
      } else if (this.index == 2) {
        console.log("was 2");
        return eventsMillenLowe;
      } else {
        return events;
      }
      this.events = temp;
      console.log("events");
      console.log(events.length);
      console.log(eventsOneStream.length);
      console.log(eventsMillenLowe.length);
 
 
    },
    updateCalendar() {
      this.$refs.calendar.getApi().render(); // Manually render the calendar
      this.componentKey += 1;
    },
    handleDateClick(info) {
      console.log("Clicked on: " + info.dateStr);
      console.log("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
      console.log("Current view: " + info.view.type);
 
      info.dayEl.style.backgroundColor = "red";
 
      const dateObj = new Date(info.dateStr);
      let year = dateObj.getFullYear();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let month = monthNames[dateObj.getMonth()];
 let index = this.index;
      // Example navigation to a new route
      this.$router.push({
        name: "apps-calendar-monthly",
        params: { year, month,index },
      });
    },
    renderEventContent(arg) {
      let eventEl = document.createElement("div");
      eventEl.innerHTML = '<b style="font-size: 12px;">' + arg.event.title + "</b>";
      return { domNodes: [eventEl] };
    },
  },
  computed: {
    calendarOptions() {
      return {
        plugins: [multiMonthPlugin, interactionPlugin],
        initialView: "multiMonthYear",
        multiMonthMaxColumns: 3,
        events: this.loadEvents(),
        eventDisplay: "block",
        editable: false,
        dayMaxEvents: false,
        views: {
          dayGridMonth: {
            buttonText: "month",
            dayMaxEventRows: false,
          },
          dayGrid: {
            buttonText: "month",
            dayMaxEventRows: false,
          },
          timeGridWeek: { buttonText: "week" },
          timeGridDay: { buttonText: "day" },
          multiMonthYear: {
            type: "multiMonthYear",
            duration: { years: 2 },
            eventMaxStack: 5,
            eventOrder: "start,-duration,allDay,title",
            dayMaxEventRows: false,
          },
        },
        eventContent: this.renderEventContent,
        dateClick: this.handleDateClick,
      };
    },
  },
});
</script>
 
<style lang="scss">
.fc .fc-button {
  padding: 0.75rem 1.25rem;
  box-shadow: none !important;
  border: 0 !important;
  border-radius: 0.475rem;
  vertical-align: middle;
  font-weight: 500;
  text-transform: capitalize;
}
 
#KSA11 {
  padding: 10px;
  font-size: normal;
  background-color: #87b7ef;
}
 
#KSA12 {
  padding: 10px;
  font-size: normal;
  background-color: #b6b603;
}
 
#KSA13 {
  padding: 10px;
  font-size: normal;
  background-color: #23a027;
}
 
#other11 {
  padding: 10px;
  font-size: normal;
  background-color: #fa7ebe;
}
 
#other12 {
  padding: 10px;
  font-size: normal;
  background-color: #b27efa;
}
 
#other13 {
  padding: 10px;
  font-size: normal;
  background-color: #f0a55e;
}
 
#other14 {
  padding: 10px;
  font-size: normal;
  background-color: #fa3737;
}
 
#other15 {
  padding: 10px;
  font-size: normal;
  background-color: #3205fa;
}
#other16   {
   
   padding: 10px;
   font-size: normal;
   background-color: #046d26;
 }
</style>
 