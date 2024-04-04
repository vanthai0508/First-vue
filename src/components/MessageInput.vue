<template>
    <div class="upload-container">
      <button @click="toggleOptions">Tải lên</button>
      <div v-if="showOptions" class="options">
        <button @click="uploadFile">Tải lên file</button>
        <button @click="uploadVideo">Tải lên video</button>
        <button @click="uploadDocument">Tải lên tệp tin</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showOptions: false
      };
    },
    methods: {
      toggleOptions() {
        this.showOptions = !this.showOptions;
      },
      uploadFile() {
        // Xử lý tải lên file
        console.log('Tải lên file');
      },
      uploadVideo() {
        // Xử lý tải lên video
        console.log('Tải lên video');
      },
      uploadDocument() {
        // Xử lý tải lên tệp tin
        console.log('Tải lên tệp tin');
      }
    }
  };
  </script>
  
  <style>
  .upload-container {
    position: relative;
    display: inline-block;
  }
  
  .options {
    position: absolute;
    top: -100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 4px;
    padding: 5px;
    z-index: 1;
  }
  
  .options button {
    display: block;
    width: 100%;
    padding: 5px 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  .options button:hover {
    background-color: #f0f0f0;
  }
  </style>
  