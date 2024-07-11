import moment from "moment";
import type { EventInput } from "@fullcalendar/core";

const todayDate = moment().startOf("day");
const YM = todayDate.format("YYYY-MM");
const YESTERDAY = todayDate.clone().subtract(1, "day").format("YYYY-MM-DD");
const TODAY = todayDate.format("YYYY-MM-DD");
const TOMORROW = todayDate.clone().add(1, "day").format("YYYY-MM-DD");

const events: Array<EventInput> = [

  {
    title: "Onboarding & Data Gathering",
    start: "2024-05-26", 
    end: "2024-06-02",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
 {
    title: "Build research methodology",
    start: "2024-06-02", 
    end: "2024-06-09",   
    description: "xxxxxxx",
    className: "fc-event-custom1",

  },
{
    title: "Consumer Profile Development",
    start: "2024-06-09", 
    end: "2024-06-16",   
    description: "xxxxxxx",
    className: "fc-event-custom2",

  },
{
    title: "Brand Concept",
    start: "2024-06-16", 
    end: "2024-06-23",   
    description: "xxxxxxx",
    className: "fc-event-custom3",

  },
{
    title: "Concept Test",
    start: "2024-06-23", 
    end: "2024-07-14",   
    description: "xxxxxxx",
    className: "fc-event-custom4",

  },
{
    title: "Brand House",
    start: "2024-07-14", 
    end: "2024-07-21",   
    description: "xxxxxxx",
    className: "fc-event-custom5",

  },
{
    title: "Brand Architecture",
    start: "2024-07-14", 
    end: "2024-07-21",   
    description: "xxxxxxx",
    className: "fc-event-custom6",

  },
  {
    title: "Visual System and Consumer Journey",
    start: "2024-07-21", 
    end: "2024-09-08",   
    description: "xxxxxxx",
    className: "fc-event-custom7",

  },
{
    title: "Consumer Journey Creation",
    start: "2024-08-25", 
    end: "2024-09-01",   
    description: "xxxxxxx",
    className: "fc-event-custom8",

  },
{
    title: "MullenLowe Lauch",
    start: "2024-09-08", 
    end: "2024-10-06",   
    description: "xxxxxxx",
    className: "fc-event-custom8",

  },

];

export default events;

export { todayDate, YM, YESTERDAY, TODAY, TOMORROW };
