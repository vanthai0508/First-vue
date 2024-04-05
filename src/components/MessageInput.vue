<template>
    <div class="upload-container">
      <UploadFile2></UploadFile2>
    </div>
  </template>
  
  <script>
  import UploadFile2 from "../components/UploadFile2.vue"
  import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";
  export default {
    components: {
      UploadFile2,
    }
  };
  </script>
  
  <style>
    .upload-container {
      padding-top: 0px;
    }
  </style>
  