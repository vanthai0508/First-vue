<template>
    <div class="form-message" v-show="Object.keys(props.user).length > 0">
        <div class="info-user-message">
            <div class="info-basic-message">
                <img v-if="props.user.value" :src="props.user.value.image" :alt="props.user.value.name"
                    class="image-message">
                <div class="div-name-message">
                    <span v-if="props.user.value" class="name-user-message">{{ props.user.value.name }}</span>
                    <span v-if="props.user.value" class="info-message">{{ props.user.value.info }}</span>
                </div>
                <div class="actions">
                    <div class="padding-svg">
                        <svg-icon @click="showListFile" class="image-actions" type="mdi" :path="icons.iconFile" width="40px" height="40px"
                            :style="{ color: '#707C97' }"></svg-icon>
                    </div>

                    <svg-icon class="image-actions" type="mdi" :path="icons.iconMenu" width="40px" height="40px"
                        :style="{ color: '#707C97' }"></svg-icon>
                </div>
            </div>
        </div>

        <div class="components-absolute">
            <div class="list-file-component">
                <ListFile @close-popup="showListFile" v-show="showFiles" :user="props.user"></ListFile>
            </div>
            <div class="components-form-message ">
                <MessageList :user="props.user"></MessageList>
            </div>
            <div class="message-input-component">

                <MessageInput :user="props.user"></MessageInput>

            </div>

            

        </div>
    </div>

</template>

<script>
import { ref, reactive } from 'vue';
import MessageList from './MessageList.vue'
import MessageInput from './MessageInput.vue'
import ListFile from './ListFile.vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAttachment, mdiDotsVertical } from '@mdi/js';

export default {
    props: {
        user: Object
    },
    components: {
        // Chat,
        MessageList,
        MessageInput,
        SvgIcon,
        ListFile
    },
    setup(props) {
        const contact = reactive(
            { name: 'John Doe', info: '..test', image: 'https://wallpapers.com/images/hd/itachi-face-qr35e5607yi63950.jpg', content: 'Font chữ chính là kiểu chữ, mẫu mã của chữ. Ví dụ, một số font chữ quen thuộc như: Times New Roman, Arial, Lucida Console' },
            // Add more contacts as needed
        );
        const icons = reactive(
            {
                iconFile: mdiAttachment,
                iconMenu: mdiDotsVertical
            }
        )

        const showFiles = ref(false);

        const showListFile = () => {
            showFiles.value = !showFiles.value
        }

        return { contact, icons, props, showFiles, showListFile };
    }


}
</script>
<style>

.list-file-component {
    position: absolute;
    z-index: 7;
    padding-left: 30%;
}
.padding-svg {
    padding-right: 12px;
}

.message-input-component {
    /* padding-top: 20%; */
}

.image-message {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.image-actions {
    /* Chiều cao của hình ảnh */
    border-radius: 50%;

    box-shadow: 0px 5px 5px #ccc;
    padding: 2px;
    /* padding-right: 40%; */
}

.actions img {
    /* padding-left: 20%; */
}

.info-basic-message {
    display: flex;
    margin: 15px;
}

.actions {
    /* position: absolute; */
    padding-right: 10%;
    padding-left: 50%;
    /* padding-top: 10%; */
    display: flex;
}

.div-name-message {
    margin-left: 5%;
    display: grid;
    text-align: left;
}

.info-user-message {
    background-color: white;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 4%;
    font-size: 18px;
    font-family: 'Noto Sans';

}

.name-user-message {
    font-weight: bold;
}

.info-message {
    color: #2A8BF2;
}

.components-form-message {
    padding-top: 5px;
    /* position: absolute; */
    /* padding-right: 45px; */

}

.form-message {
    padding-top: 10%;
    padding-right: 10%;

}

.message-input-component {
    position: absolute;
    width: 100%;
    height: 100%;
    /* left: 30px; */
    top: 80%;
    /* padding-top: 45%; */
}

.components-absolute {
    position: relative;

}
</style>