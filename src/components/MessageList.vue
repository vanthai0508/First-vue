<template>

    <div class="messages" id="messagess">
        <ul>
            <div class="content-message">
                <li v-for="(message, index) in messages" :key="index"
                    :class="{ 'message-left': message.from === userTo.value, 'message-right': message.from !== userTo.value }">
                    <div v-if="message.from === userTo.value" class="message-align-left">
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
import { ref, reactive } from 'vue';
import { onMounted } from 'vue';
import ChatService from "../services/ChatService.ts"
import { mdiEyeCheckOutline } from '@mdi/js';
export default {

    setup() {
        const userTo = ref(5);
        const messages = ref([] );

        const scroll = () => {
            var element = document.getElementById("messagess");
            element.scrollTop = element.scrollHeight;
        }

        const getMessage = async () => {
            await ChatService.getMessage(userTo.value).then(
                response => {
                    // console.log(response.data.data, 'first');
                    messages.value = response.data;
                    console.log(messages.value, 'thai');
                }
            ).catch(err => {

            });
        }

        const listen = () => {
            window.Echo.private('chat')
            .listen('MessageSent', (e) => {
                console.log('listen');
                messages.value.push(e.message);
                scroll();
            });
        }

        getMessage();
        listen();

        onMounted(
            scroll
        );

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