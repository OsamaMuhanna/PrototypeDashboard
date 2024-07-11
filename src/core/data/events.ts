import moment from "moment";
import type { EventInput } from "@fullcalendar/core";

const todayDate = moment().startOf("day");
const YM = todayDate.format("YYYY-MM");
const YESTERDAY = todayDate.clone().subtract(1, "day").format("YYYY-MM-DD");
const TODAY = todayDate.format("YYYY-MM-DD");
const TOMORROW = todayDate.clone().add(1, "day").format("YYYY-MM-DD");

const events: Array<EventInput> = [

  {
    title: "Planning Phase",
    start: "2023-12-03", 
    end: "2024-01-21",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
  

  {
    title: "Core HR & Payroll Requirements Gathering",
    start: "2023-12-24", 
    end: "2024-02-04",   
    description: "xxxxxxx",
    className: "fc-event-custom",
  },
  {
    title: "OTL & Recruitment Requirements Gathering",
    start: "2023-12-31", 
    end: "2024-02-18",   
    description: "xxxxxxx",
    className: "fc-event-custom",
  },
  {
    title: "Learning & Performance Requirements Gathering & CRP1 ",
    start: "2024-06-02", 
    end: "2024-06-16",   
    description: "xxxxxxx",
    className: "fc-event-custom",
  },
  {
    title: "Design, Build & Test",
    start: "2024-02-25", 
    end: "2024-06-16",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },

  {
    title: "Elaboration Phase",
    start: "2024-02-18", 
    end: "2024-06-30",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "Recruitment Implementation; Enable Recruitment Booster Feature, Integration with Linkedin & CV Parsing",
    start: "2024-09-14", 
    end: "2025-01-05",   
    description: "xxxxxxx",
    className: "fc-event-custom2",
  },
  {
    title: "Preliminary  Reporting Fit Analysis",
    start: "2024-01-28", 
    end: "2024-02-18",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "App Interfaces Definition & Data Conversion Preparation ",
    start: "2024-02-04", 
    end: "2024-02-25",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "Sign Off Reporting Fit Ananlysis ",
    start: "2024-02-18", 
    end: "2024-02-25",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "CRP Configuration",
    start: "2024-02-18", 
    end: "2024-04-21",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "CRP Configuration",
    start: "2024-02-18", 
    end: "2024-04-21",   
    description: "xxxxxxx",
    className: "fc-event-danger fc-event-solid-warning",
  },
  {
    title: "Conduct CRP",
    start: "2024-04-21", 
    end: "2024-06-30",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "Data Conversion",
    start: "2024-04-28", 
    end: "2024-06-02",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "Build",
    start: "2024-02-25", 
    end: "2024-06-21",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  
 
  {
    title: "HCM Design and Build Completed ",
    start: "2024-06-16", 
    end: "2024-07-07",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "HCM UAT Completed ",
    start: "2024-07-28", 
    end: "2024-08-25",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "User Acceptance Test",
    start: "2024-06-09", 
    end: "2024-07-28",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "Training",
    start: "2024-06-23", 
    end: "2024-07-14",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "Transition Phase",
    start: "2024-07-21", 
    end: "2024-09-08",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "Production Phase",
    start: "2024-09-01", 
    end: "2024-09-22",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "Security Setup and Readiness",
    start: "2024-09-01", 
    end: "2024-09-22",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },
  {
    title: "HCM Go-Live (KSA)",
    start: "2024-09-22", 
    end: "2024-10-20",   
    description: "xxxxxxx",
    className: "fc-event-custom1",
  },

  {
    title: "Definition Phase",
    start: "2024-09-23", 
    end: "2024-10-12",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Core HR, Payroll, OTL, ORC, Learning & Performance Management Requirements Gathering",
    start: "2024-09-23", 
    end: "2024-10-12",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Conduct Reporting Fit Analysis",
    start: "2024-10-13", 
    end: "2025-03-02",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Preliminary  Reporting Fit Analysis",
    start: "2024-10-13", 
    end: "2024-10-20",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "App Interfaces Definition & Data Conversion Preparation ",
    start: "2024-10-20", 
    end: "2024-10-27",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Sign Off Reporting Fit Ananlysis  ",
    start: "2024-10-27", 
    end: "2024-11-03",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Elaboration Phase",
    start: "2024-10-20", 
    end: "2025-01-19",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "CRP Configuration",
    start: "2024-10-20", 
    end: "2024-11-24",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },

  {
    title: "Conduct CRP",
    start: "2024-11-24", 
    end: "2025-01-19",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Data Conversion",
    start: "2024-12-01", 
    end: "2024-12-15",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Build",
    start: "2024-12-01", 
    end: "2025-02-09",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Design, Build& Test",
    start: "2024-12-01", 
    end: "2024-12-08",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Training",
    start: "2025-01-12", 
    end: "2025-01-19",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "User Acceptance Test",
    start: "2025-01-19", 
    end: "2025-02-09",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Transition Phase",
    start: "2025-02-02", 
    end: "2025-02-23",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Production Phase",
    start: "2025-02-23", 
    end: "2025-03-02",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "Security Setup and Readiness",
    start: "2025-02-23", 
    end: "2025-03-02",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "UAT Completion (UAE Rollout)",
    start: "2025-02-05", 
    end: "2025-02-02",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },
  {
    title: "UAE Go-Live",
    start: "2025-03-02", 
    end: "2025-03-23",   
    description: "xxxxxxx",
    className: "fc-event-custom3",
  },

  {
    title: "Bahrain Rollout",
    start: "2025-03-02", 
    end: "2025-06-15",   
    description: "xxxxxxx",
    className: "fc-event-custom4",
  },
  {
    title: "Kuwait Rollout",
    start: "2025-03-08", 
    end: "2025-09-21",   
    description: "xxxxxxx",
    className: "fc-event-custom5",
  },
  {
    title: "Qatar Rollout",
    start: "2025-09-14", 
    end: "2025-12-28",   
    description: "xxxxxxx",
    className: "fc-event-custom6",
  },
  {
    title: "Oman Rollout",
    start: "2025-12-28", 
    end: "2026-04-05",   
    description: "xxxxxxx",
    className: "fc-event-custom7",
  },
];

export default events;

export { todayDate, YM, YESTERDAY, TODAY, TOMORROW };
