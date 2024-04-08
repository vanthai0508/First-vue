<template>

    <div class="messages" id="messagess">
        <ul>
            <div class="content-message">
                <li v-for="(message, index) in messages" :key="index"
                    :class="{ 'message-left': message.from === 1, 'message-right': message.from !== 1 }">
                    <div v-if="message.from === 1" class="message-align-left">
                        <p>{{ message.content }}</p>
                    </div>
                    <div v-else class="message-align-right">
                        <p>{{ message.content }}</p>
                    </div>
                </li>

            </div>

        </ul>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { onMounted } from 'vue';
export default {

    setup() {
        const messages = reactive([
            { from: 1, content: "th fjsa nfsj nsf asfas fsafn", to: 2 },
            { from: 2, content: "th fjsa nfsj nsf asfas fsafn", to: 1 },
            { from: 2, content: "th fjsa nfsj nsf asfas fsafndsad dsad dsad dsa", to: 1 },
            { from: 2, content: "th fjsa nfsj nsf asfas fsafn", to: 1 },
            { from: 1, content: "th fjsa nfsj nsf asfas fsafn", to: 2 },
            { from: 1, content: "th fjsa ", to: 2 },
            { from: 2, content: "th fjsa nfsj nsf asfas fsafn", to: 1 },
            { from: 1, content: "th fjsa nfsj nsf asfas fsafndsd dsad dsad dsad dsad", to: 2 },
            { from: 2, content: "th fjsa nfsj nsf asfas fsafndfsd fdsf fdsf fdsf dsd dsa dsad dsad dsad dsadas dsadas", to: 1 },
        ]);

        const scroll = () => {
            var element = document.getElementById("messagess");
            element.scrollTop = element.scrollHeight;
        }

        onMounted(
            scroll
        );

        return { messages, scroll }
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