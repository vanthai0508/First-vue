<template>
    <div class="upload-container">
        <UploadFile @send-file="handleUploadFile" class="upload-file2"></UploadFile>
        <input placeholder="ここにメッセージを入力してください" v-model="message" @keyup.enter="sendMessage" class="input-send">
        <div v-show="fileUpload.value && Object.keys(fileUpload.value).length > 0" class="icons-upload">
            <svg-icon @click="removeFile" class="icon-upload" width="70px" height="70px" type="mdi" :path="iconUploadAnother"
                :style="{ color: 'blue' }">
            </svg-icon>
            <p v-if="fileUpload.value">File.{{ fileUpload.value.type }}</p>
        </div>
        <!-- <button class="but-send" @click="sendMessage"> -->
            <svg-icon class="but-send" @click="sendMessage" type="mdi" :path="icons.send" :style="{ color: 'white' }">
            </svg-icon>
        <!-- </button> -->
    </div>
</template>

<script>
import UploadFile from "../components/UploadFile.vue"
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiSend, mdiSendVariant, mdiImage, mdiFilmstrip, mdiFile } from '@mdi/js';
import { ref, reactive } from 'vue';
import ChatService from "../services/ChatService.ts"

export default {
    props: {
        user: Object
    },
    components: {
        UploadFile,
        SvgIcon
    },
    setup(props) {
        const message = ref('');
        const iconUploadAnother = ref('');
        const icons = reactive(
            {
                send: mdiSendVariant
            }
        )

        const iconUploads = reactive(
            {
                video: mdiFilmstrip,
                image: mdiImage,
                file: mdiFile,
            }
        )

        const fileUpload = reactive({});
        const sendMessage = async () => {
            const formData = new FormData();
            formData.append('text', message.value);
            formData.append('to', props.user.value.id);
            if (fileUpload.value && Object.keys(fileUpload.value).length > 0) {
                formData.append('file_id', fileUpload.value.id);
            } 
            message.value = '';
            removeFile();
            await ChatService.send(formData).then(response => {
                console.log('send success');
            }).catch(err => {
                console.log(err, 'error')
            });
        }

        const handleUploadFile = (infoFile) => {
            fileUpload.value = infoFile
            if(infoFile.type === "video/mp4") {
                iconUploadAnother.value = iconUploads.video
            } else if (infoFile.type === "image/jpeg") {
                iconUploadAnother.value = iconUploads.image
            } else {
                iconUploadAnother.value = iconUploads.file
            }
        }

        const removeFile = () => {
            fileUpload.value = {};
        }

        return { icons, message, sendMessage, handleUploadFile, iconUploads, fileUpload, removeFile, iconUploadAnother }
    }
};
</script>

<style>
.upload-container {
    position: relative;
}

.icons-upload {
    text-align: center;
    position: absolute;
    padding-top: 1%;
    padding-left: 10%;
    z-index: 3;
}

.icons-upload p {
    margin-top: 0;
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
    z-index: 4;
    left: 30px;
}

.but-send {
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