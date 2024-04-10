<template>

    <div class="messages" id="messagess">
        <ul>
            <div class="content-message">
                <li v-for="(message, index) in messages" :key="index"
                    :class="{ 'message-left': message.from === userTo, 'message-right': message.from !== userTo }">
                    <div v-if="message.from === userTo" class="message-align-left">
                        <p>{{ message.text }}</p>
                    </div>
                    <div v-else class="message-align-right">
                        <p>{{ message.text }}</p>
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

export default {
    props: {
        user: Object
    },
    setup(props) {
        const userTo = ref(0);
        const messages = ref([]);

        const scroll = () => {
            var element = document.getElementById("messagess");
            element.scrollTop = element.scrollHeight;
        }

        const getMessage = async (to) => {
            userTo.value = to
            await ChatService.getMessage(to).then(
                response => {
                    messages.value = response.data;
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

        return { messages, scroll, userTo }
    }




}
</script>

<style>
.messages {
    background-color: white;
    /* width: 95%;  */
    padding-bottom: 1%;
    padding-left: 4%;
    font-size: 18px;
    font-family: 'Noto Sans';
    height: 450px;
    overflow-y: scroll;
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

.message-align-right {
    padding-top: 0.03px;
    padding-bottom: 1px;
    padding-left: 6%;
    padding-right: 3%;
    text-align: left;
    background-color: white;
    margin-right: auto;
    position: relative;
    right: 0px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 20px 20px 0px 20px;
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