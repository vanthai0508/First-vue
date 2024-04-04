<template>

    <div class="messages" id="messagess">
        <ul>
            <li v-for="(message, index) in messages" :key="index">
                <div v-if="message.from === 1" class="message-align-left">
                    <p>{{ message.content }}</p>
                </div>
                <div v-else class="message-align-right">
                    <p>{{ message.content }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import {  onMounted } from 'vue';
export default {

    setup() {
        const messages = reactive([
            { from: 1, content: "th fjsa nfsj nsf asfas fsafn", to: 2 },
            { from: 2, content: "th fjsa nfsj nsf asfas fsafn", to: 1 },
            { from: 2, content: "th fjsa nfsj nsf asfas fsafn", to: 1 },
            { from: 2, content: "th fjsa nfsj nsf asfas fsafn", to: 1 },
            { from: 1, content: "th fjsa nfsj nsf asfas fsafn", to: 2 },
            { from: 1, content: "th fjsa nfsj nsf asfas fsafn", to: 2 },
            { from: 2, content: "th fjsa nfsj nsf asfas fsafn", to: 1 },
            { from: 1, content: "th fjsa nfsj nsf asfas fsafn", to: 2 },
            { from: 2, content: "th fjsa nfsj nsf asfas fsafn", to: 1 },
        ]);

        const scroll = () => {
            var element = document.getElementById("messagess");
            element.scrollTop = element.scrollHeight;
        }
        // scroll();

        onMounted(scroll);

        return { messages, scroll }
    }

    


}
</script>

<style>
.messages {
    background-color: white;
    width: 95%;
    padding-bottom: 1%;
    padding-left: 4%;
    font-size: 18px;
    font-family: 'Noto Sans';
    height: 400px;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.messages::-webkit-scrollbar {
    width: 5px;
    /* Độ rộng của thanh cuộn */
    background-color: #E6ECFE;
}

.messages::-webkit-scrollbar-thumb {
    background-color: #B7BDCB;
    border-radius: 6px;
}

.messages ul li {
    padding-top: 15px;
    /* padding-left: 40%; */
    /* text-align: right; */
}

/* .message {
    background-color: #2A8BF2;
    max-width: 60%;
} */

.message-align-left {
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 2%;
    text-align: left;
    justify-content: flex-start;
    background-color: #2A8BF2;
    color: white;
    border: 1px solid #ccc;
    border-radius: 0px 20px 20px 20px;
    max-width: 60%;
}

.message-align-right {
    padding-top: 0.03px;
    padding-bottom: 1px;
    padding-right: 2%;
    /* padding-left: 40%; */
    text-align: right;
    background-color: white;
    /* max-width: 60%; */
    /* justify-content: flex-end; */
    align-self: flex-end;
    margin-right: auto;
}

/* .message-align-right p {
    background-color: white;
} */
</style>