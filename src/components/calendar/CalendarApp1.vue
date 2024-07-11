<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->

    
    <div v-if="index == 0"class="card-header">
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
    <div v-if="index == 1" class="card-header">
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

    <div v-if="index == 2" class="card-header">
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
      <FullCalendar
        class="demo-app-calendar"
        :options="calendarOptions"
      ></FullCalendar>
      <!--end::Calendar-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->

  <NewEventModal></NewEventModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent,ref, computed, onMounted } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import events, { TODAY } from "@/core/data/events";
import NewEventModal from "@/components/modals/forms/NewEventModal.vue";
import { Modal } from "bootstrap";
import{ useRoute }from'vue-router';
import eventsOneStream from "@/core/data/eventsOneStream";
import eventsMillenLowe from "@/core/data/eventsMillenLowe";
import { emptyProps } from "element-plus";


export default {
  data() {
    return {
index:0
    };
  },
  name: 'calendar-app-1',
  components: {
    FullCalendar,
    NewEventModal,
  }, 
  
  created(){
    const route = useRoute();
    const index = ref(route.params.index);
    this.index=Number(index.value);
  },
  
  
  setup() {
    const route = useRoute();
    const year = ref(route.params.year);
    const month = ref(route.params.month);

    const index = ref(route.params.index);

console.log('yyyy'+JSON.stringify(index));
let selectedevents: EventInput[] = events; // Initialize with a default value

if (typeof index.value === 'string') {
  // Handle string case
  if (parseInt(index.value) === 0) {
    selectedevents = events;
  } else if (parseInt(index.value) === 1) {
    selectedevents = eventsOneStream;
  } else if (parseInt(index.value) === 2) {
    selectedevents = eventsMillenLowe;
  } else {
    selectedevents = events; // Default case
  }
} else if (Array.isArray(index.value)) {
  // Handle array case
  // You may want to handle multiple values in the array differently
  // For simplicity, let's assume you handle the first element
  if (index.value.length > 0 && parseInt(index.value[0]) === 0) {
    selectedevents = events;
  } else {
    selectedevents = events; // Default case for arrays
  }}
    console.log('Year:', year.value);
    console.log('Month:', month.value);

    const newEvent = () => {
      const modal = new Modal(document.getElementById('kt_modal_add_event'));
      modal.show();
    };
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'    ];
    const monthIndex = monthNames.findIndex(m => m.toLowerCase() === month.value.toLowerCase());

    // Return month number (1-based index) or null if not foundconst initialMonth = monthIndex !== -1 ? monthIndex : null;

    const initialDate = monthIndex !== null ? new Date(year.value, monthIndex, 1) : new Date();

    const calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    events : selectedevents ,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },      initialDate: initialDate,
      navLinks: true, // can click day/week names to navigate viewsselectable: true,
      selectMirror: true,
      views: {
        dayGridMonth: { buttonText: 'month' },
        timeGridWeek: { buttonText: 'week' },
        timeGridDay: { buttonText: 'day' },
      },
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many eventsevents: [], // Assuming events is defined somewhere in your codedateClick: newEvent,
      eventClick: newEvent,
    };

    return {
      year,
      month,
      calendarOptions,
      newEvent,
    };
  },

   

      
    
 
 
   
  
  };


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
      background-color: #f3f35c;
    }
     #KSA13 {
   
      padding: 10px;
      font-size: normal;
      background-color: #6eea73;
    }
    #other11   {
   
      padding: 10px;
      font-size: normal;
      background-color: #fa7ebe;
    }
     #other12   {
   
      padding: 10px;
      font-size: normal;
      background-color: #b27efa;
    }
     #other13   {
   
      padding: 10px;
      font-size: normal;
      background-color: #f0a55e;
    }
     #other14   {
   
      padding: 10px;
      font-size: normal;
      background-color: #fa3737;
    }
     #other15   {
   
      padding: 10px;
      font-size: normal;
      background-color: #3205fa;
    }
</style>
