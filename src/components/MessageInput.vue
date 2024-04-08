<template>
  <div class="upload-container">
    <UploadFile class="upload-file2"></UploadFile>
      <input placeholder="ここにメッセージを入力してください" class="input-send">
    <button class="but-send" >
      <svg-icon class="iconn" type="mdi" :path="icons.send" :style="{ color: 'white' }">
      </svg-icon>
    </button>
  </div>
</template>

<script>
import UploadFile from "../components/UploadFile.vue"
import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiSend, mdiSendVariant   } from '@mdi/js';
import { ref, reactive } from 'vue';

export default {
  components: {
    UploadFile,
    SvgIcon
  },
  setup() {
        const icons = reactive(
            {
                send: mdiSendVariant 
            }
        )

        return { icons }
    }
};
</script>

<style>
.upload-container {
  position: relative;
}

.input-send {
  position: absolute;
  z-index: 1;
  width: 60%;
  height: 70px;
  top: 95px;
  padding-left: 20%;
  padding-right: 20%;
  border: none;
  
}

.upload-file2 {
  position: absolute;
  z-index: 2;
  left: 30px;
}

.but-send {
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 2;
  top: 120px;
  right: 20px;
  border-radius: 50%;
  background-color: #2A8BF2;
  text-align: center;
  border: none;
}

.iconn {
  width: 12px;
  padding-top: 1px;
}


</style>