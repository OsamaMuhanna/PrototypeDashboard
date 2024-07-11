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
    start: "2024-05-05", 
    end: "2024-06-09",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
  {
    title: "ES and COA Finalization",
    start: "2024-05-12", 
    end: "2024-06-09",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
 {
    title: "Prep",
    start: "2024-05-12", 
    end: "2024-05-19",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
 {
    title: "Workshops and Finalization",
    start: "2024-05-19", 
    end: "2024-06-09",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
 {
    title: "To Be Solution Discussions",
    start: "2024-06-02", 
    end: "2024-07-21",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
 {
    title: "Prep",
    start: "2024-06-02", 
    end: "2024-06-16",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
   {
    title: "Holidays",
    start: "2024-06-16", 
    end: "2024-06-23",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
   {
    title: "Sessions",
    start: "2024-06-23", 
    end: "2024-07-14",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
{
    title: "PB1 Env Access",
    start: "2024-06-30", 
    end: "2024-07-07",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
{
    title: "Process Playback",
    start: "2024-07-14", 
    end: "2024-09-08",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
{
    title: "Prep (Env, Config, Data, User Journeys)",
    start: "2024-07-14", 
    end: "2024-08-11",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
  {
    title: "PB1 Sessions",
    start: "2024-08-11", 
    end: "2024-09-08",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
 {
    title: "Global Design Doc Prep and Sign Off",
    start: "2024-09-01", 
    end: "2024-09-29",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
 {
    title: "Tech and DM Strategy Doc Prep and Sign Off",
    start: "2024-09-21", 
    end: "2024-09-22",   
    description: "xxxxxxx",
    className: "fc-event-custom",

  },
 {
    title: "Func and Tech Design and Sign Off (OCS)",
    start: "2024-09-01", 
    end: "2024-10-13",   
    description: "xxxxxxx",
    className: "fc-event-custom1",

  },
 {
    title: "Func and Tech Design and Sign Off (NAPCO)",
    start: "2024-09-01", 
    end: "2024-10-13",   
    description: "xxxxxxx",
    className: "fc-event-custom1",

  },
 {
    title: "Technical Build (OCS)",
    start: "2024-09-15", 
    end: "2024-11-24",   
    description: "xxxxxxx",
    className: "fc-event-custom1",

  },
 {
    title: "Technical Build (NAPCO)",
    start: "2024-09-15", 
    end: "2024-11-24",   
    description: "xxxxxxx",
    className: "fc-event-custom1",

  },
 {
    title: "Data prep by NAPCO-SIT",
    start: "2024-09-01", 
    end: "2024-11-27",   
    description: "xxxxxxx",
    className: "fc-event-custom2",

  },
{
    title: "UAT Data Preparation",
    start: "2024-12-01", 
    end: "2024-12-29",   
    description: "xxxxxxx",
    className: "fc-event-custom2",

  },
 {
    title: "SIT-OCS",
    start: "2024-09-29", 
    end: "2024-12-29",   
    description: "xxxxxxx",
    className: "fc-event-custom2",

  },
 {
    title: "SIT Env",
    start: "2024-09-29", 
    end: "2024-10-06",   
    description: "xxxxxxx",
    className: "fc-event-custom2",

  },
 {
    title: "SIT Prep (Config, Tech Deployments, Data Migration)",
    start: "2024-10-13", 
    end: "2024-11-24",   
    description: "xxxxxxx",
    className: "fc-event-custom2",

  },
 {
    title: "SIT Execution",
    start: "2024-11-24", 
    end: "2024-12-29",   
    description: "xxxxxxx",
    className: "fc-event-custom2",

  },
 {
    title: "SIT (NAPCO Components)",
    start: "2024-09-29", 
    end: "2024-12-29",   
    description: "xxxxxxx",
    className: "fc-event-custom2",

  },
{
    title: "Technical Training",
    start: "2024-08-04", 
    end: "2024-08-25",   
    description: "xxxxxxx",
    className: "fc-event-custom3",

  },
{
    title: "Key User Training",
    start: "2024-12-22", 
    end: "2025-02-23",   
    description: "xxxxxxx",
    className: "fc-event-custom3",

  },


{
    title: "KUT Prep",
    start: "2024-12-22", 
    end: "2024-12-29",   
    description: "xxxxxxx",
    className: "fc-event-custom3",

  },
{
    title: "Holidays",
    start: "2024-12-29", 
    end: "2025-01-05",   
    description: "xxxxxxx",
    className: "fc-event-custom3",

  },
{
    title: "KUT Prep",
    start: "2025-01-05", 
    end: "2025-01-19",   
    description: "xxxxxxx",
    className: "fc-event-custom3",

  },
{
    title: "KUT Sessions",
    start: "2025-02-02", 
    end: "2025-02-23",   
    description: "xxxxxxx",
    className: "fc-event-custom3",

  },
{
    title: "End User Training (NAPCO)",
    start: "2025-04-06", 
    end: "2025-05-18",   
    description: "xxxxxxx",
    className: "fc-event-custom3",

  },
{
    title: "User Acceptance Testing",
    start: "2025-01-12", 
    end: "2025-03-30",   
    description: "xxxxxxx",
    className: "fc-event-custom4",

  },
{
    title: "UAT ENV",
    start: "2025-01-05", 
    end: "2025-01-12",   
    description: "xxxxxxx",
    className: "fc-event-custom4",

  },
{
    title: "Prep (Config, Technical Deployment, Scripts, Data Migration)",
    start: "2025-01-12", 
    end: "2025-02-23",   
    description: "xxxxxxx",
    className: "fc-event-custom4",

  },
{
    title: "UAT Sessions-OCS",
    start: "2025-02-23", 
    end: "2025-03-30",   
    description: "xxxxxxx",
    className: "fc-event-custom4",

  },
{
    title: "NAPCO UAT",
    start: "2025-02-23", 
    end: "2025-03-30",   
    description: "xxxxxxx",
    className: "fc-event-custom4",

  },
{
    title: "Prod Data Preparations",
    start: "2025-04-27", 
    end: "2025-06-01",   
    description: "xxxxxxx",
    className: "fc-event-custom4",

  },
{
    title: "Holidays",
    start: "2025-04-27", 
    end: "2025-06-01",   
    description: "xxxxxxx",
    className: "fc-event-custom5",

  },
{
    title: "Production Cutover",
    start: "2025-04-06", 
    end: "2025-06-01",   
    description: "xxxxxxx",
    className: "fc-event-custom5",

  },
{
    title: "Cutover Strategy and Planning",
    start: "2025-04-06", 
    end: "2025-04-27",   
    description: "xxxxxxx",
    className: "fc-event-custom5",

  },
{
    title: "Cutover",
    start: "2025-05-04", 
    end: "2025-06-01",   
    description: "xxxxxxx",
    className: "fc-event-custom5",

  },
{
    title: "Hypercare",
    start: "2025-06-01", 
    end: "2025-06-08",   
    description: "xxxxxxx",
    className: "fc-event-custom5",

  },
{
    title: "Holiday",
    start: "2025-06-08", 
    end: "2025-08-15",   
    description: "xxxxxxx",
    className: "fc-event-custom5",

  },
{
    title: "Hypercare",
    start: "2025-06-15", 
    end: "2025-07-06",   
    description: "xxxxxxx",
    className: "fc-event-custom5",

  },
];

export default events;

export { todayDate, YM, YESTERDAY, TODAY, TOMORROW };
