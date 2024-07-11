<template>
  <!--begin::Toolbar-->
  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Heading-->
    <h2 class="fs-2 fw-semibold my-2">
      Projects
      <span class="fs-6 text-gray-500 ms-1">by Status</span>
    </h2>
    <!--end::Heading-->

    <!--begin::Controls-->
    <div class="d-flex flex-wrap my-1">
      <!--begin::Select wrapper-->
      <div class="m-0">
        <!--begin::Select-->
        <select
          name="status"
          data-control="select2"
          data-hide-search="true"
          class="form-select form-select-white form-select-sm fw-bold w-125px"
        >
          <option value="Active" selected>Active</option>
          <option value="Approved">In Progress</option>
          <option value="Declined">To Do</option>
          <option value="In Progress">Completed</option>
        </select>
        <!--end::Select-->
      </div>
      <!--end::Select wrapper-->
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Toolbar-->

  <!--begin::Row-->
  <div class="row g-6 g-xl-9">
    <!--begin::Col-->
   
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        status="In Progress"
        status-data-badge-color="badge-light"
        :progress="30"
        :icon="getAssetPath('media/svg/brand-logos/disqus.svg')"
        title="HCM Fusion"
        date="Dec 3, 2023"
        budget="KSA : Sept 15, 2024"
        budget1="UAE : Feb 23,2025"
        budget2="Bahrain :Jun 8,2025"
      
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        status="In Progress"
        status-data-badge-color="badge-light-success"
        :progress="20"
        :icon="getAssetPath('media/svg/brand-logos/figma-1.svg')"
        title="OneStream"
        date="Apr 28, 2024"
        budget="Jun 1,2025"
   
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        status="In Progress"
        :progress="60"
        :icon="getAssetPath('media/svg/brand-logos/xing-icon.svg')"
        title="MullenLowe"
        date="May 26, 2024"
        budget="Sept 8,2025"

      ></KTCard>
    </div>
    <!--end::Col-->

   


    <!--<div class="d-flex flex-stack flex-wrap pt-10">
      <div class="fs-6 fw-semibold text-gray-700">
        Showing 1 to 10 of 50 entries
      </div>


      <ul class="pagination">
        <li class="page-item previous">
          <a href="#" class="page-link"><i class="previous"></i></a>
        </li>

        <li class="page-item active">
          <a href="#" class="page-link">1</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">2</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">3</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">4</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">5</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">6</a>
        </li>

        <li class="page-item next">
          <a href="#" class="page-link"><i class="next"></i></a>
        </li>
      </ul>
   
    </div>-->

  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTCard from "@/components/cards/Card1.vue";

export default defineComponent({
  name: "profile-projects",
  components: {
    KTCard,
  },
  setup() {
    const users1 = [
      { name: "Emma Smith", src: getAssetPath("media/avatars/300-6.jpg") },
      { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users2 = [
      { name: "Alan Warden", initials: "A", state: "warning" },
      { name: "Brian Cox", src: getAssetPath("media/avatars/300-5.jpg") },
    ];

    const users3 = [
      { name: "Mad Masy", src: getAssetPath("media/avatars/300-6.jpg") },
      { name: "Cris Willson", src: getAssetPath("media/avatars/300-1.jpg") },
      { name: "Mike Garcie", initials: "M", state: "info" },
    ];

    const users4 = [
      { name: "Nich Warden", initials: "N", state: "warning" },
      { name: "Rob Otto", initials: "R", state: "success" },
    ];

    const users5 = [
      {
        name: "Francis Mitcham",
        src: getAssetPath("media/avatars/300-20.jpg"),
      },
      {
        name: "Michelle Swanston",
        src: getAssetPath("media/avatars/300-7.jpg"),
      },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users6 = [
      { name: "Emma Smith", src: getAssetPath("media/avatars/300-6.jpg") },
      { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users7 = [
      { name: "Meloday Macy", src: getAssetPath("media/avatars/300-2.jpg") },
      { name: "Rabbin Watterman", initials: "S", state: "success" },
    ];

    const users8 = [
      { name: "Emma Smith", src: getAssetPath("media/avatars/300-6.jpg") },
      { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users9 = [
      { name: "Meloday Macy", src: getAssetPath("media/avatars/300-2.jpg") },
      { name: "Rabbin Watterman", initials: "S", state: "danger" },
    ];

    return {
      users1,
      users2,
      users3,
      users4,
      users5,
      users6,
      users7,
      users8,
      users9,
      getAssetPath,
    };
  },
});
</script>
