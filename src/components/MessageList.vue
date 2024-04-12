<template>

    <div class="messages" id="messagess">
        <ul>
            <div class="content-message">
                <li v-for="(message, index) in messages" :key="index"
                    :class="{ 'message-left': message.from === userTo, 'message-right': message.from !== userTo }">
                    <div v-if="message.from === userTo" class="message-align-left">
                        <p v-if="message.text" class="auto-break">{{ message.text }}</p>
                        <div v-if="message.file" class="icon-file-left">
                            <p >({{message.file.size}} Mb) File.{{ message.file.type }}</p>
                            <svg-icon v-show="(message.file.type === 'video/mp4')" type="mdi" :path="icons.video"></svg-icon>
                            <svg-icon v-show="(message.file.type === 'image/jpeg')" type="mdi" :path="icons.image"></svg-icon>
                            <svg-icon v-show="(message.file.type !== 'video/mp4') && (message.file.type !== 'image/jpeg')" type="mdi" :path="icons.file"></svg-icon>
                        </div>
                    </div>
                    <div v-else class="message-align-right">
                        <p class="auto-break">{{ message.text }}</p>
                        <div v-if="message.file" class="icon-file-right">
                            <p >({{message.file.size}} Mb) File.{{ message.file.type }}</p>
                            <svg-icon v-show="(message.file.type === 'video/mp4')" type="mdi" :path="icons.video"></svg-icon>
                            <svg-icon v-show="(message.file.type === 'image/jpeg')" type="mdi" :path="icons.image"></svg-icon>
                            <svg-icon v-show="(message.file.type !== 'video/mp4') && (message.file.type !== 'image/jpeg')" type="mdi" :path="icons.file"></svg-icon>
                        </div>
                    </div>
                </li>

            </div>

        </ul>
    </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
import ChatService from "../services/ChatService.ts"
import { mdiEyeCheckOutline } from '@mdi/js';
import { getUserInfo } from "../utils/authenticate.js";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiImage, mdiFilmstrip, mdiFile } from '@mdi/js';

export default {
    props: {
        user: Object
    },
    components: {
        SvgIcon
    },
    setup(props) {
        const userTo = ref(0);
        const messages = ref([]);

        const scroll = () => {
            var element = document.getElementById("messagess");
            element.scrollTop = element.scrollHeight;
        }

        const icons = reactive(
            {
                video: mdiFilmstrip,
                image: mdiImage,
                file: mdiFile,
            }
        )

        const getMessage = async (to) => {
            userTo.value = to
            await ChatService.getMessage(to).then(
                response => {
                    messages.value = response.data.data;
                }
            ).catch(err => {

            });
        }

        watch(props.user, async (newValue, oldValue) => {
            if (props.user) {
                getMessage(props.user.value.id);
                scroll();
            }
        }, { immediate: false });

        const listen = () => {
            window.Echo.private('chat')
                .listen('MessageSent', (e) => {
                    if (
                        (e.user.to == parseInt(getUserInfo()) && e.user.from == userTo.value)
                        || (e.user.to == userTo.value && e.user.from == parseInt(getUserInfo()))
                    ) {
                        messages.value.push(e.message);
                        scroll();
                    }
                    scroll();
                });
        }

        listen();

        return { messages, scroll, userTo, icons }
    }




}
</script>

<style>
.icon-file-right {
    text-align: right;
    display: flex;
    color: #2A8BF2;
}

.icon-file-right p {
    margin: 0;
}
.icon-file-left {
    text-align: left;
    display: flex;
    color: #fafcfd
}

.icon-file-left p {
    margin: 0;
}
.messages {
    background-color: white;
    width: 96.5%; 
    padding-bottom: 1%;
    padding-left: 4%;
    font-size: 18px;
    font-family: 'Noto Sans';
    height: 460px;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.messages::-webkit-scrollbar {
    width: 5px;
    background-color: #E6ECFE;
}

.messages::-webkit-scrollbar-thumb {
    background-color: #B7BDCB;
    border-radius: 6px;
}

.messages ul li {
    padding-top: 15px;
}

.message-align-left {
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 6%;
    padding-right: 3%;
    text-align: left;
    background-color: #2A8BF2;
    color: white;
    border: 1px solid #ccc;
    border-radius: 0px 20px 20px 20px;
    display: inline-block;
}

/* .message-align-left p {
    
} */

.message-align-right {
    padding-top: 0.03px;
    padding-bottom: 1px;
    padding-left: 6%;
    padding-right: 3%;
    text-align: left;
    background-color: white;
    color: #707C97;
    margin-right: auto;
    position: relative;
    right: 0px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 20px 20px 0px 20px;
}
.auto-break {
    word-wrap: break-word; /* Cho phép từ bị cắt ngang nếu chúng dài quá */
    word-break: break-all;
    margin: 0;
    padding-bottom: 6px;
    padding-top: 6px;
    font-family: 'Noto Sans';
}

.message-left {
    padding-right: 40%;
    width: auto;
}

.message-right {
    padding-left: 40%;
    text-align: right;
    padding-right: 4%;
}
</style>