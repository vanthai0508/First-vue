<template>
    <div class="list-file">
        <div class="icon-close">
            <svg-icon @click="removePopup" width="30px" height="30px" type="mdi" :path="icons.close"></svg-icon>
        </div>
        <div class="files">
            <ul>
                <li v-for="(message, index) in messages" :key="index">
                    <div class="file" v-if="message.file">
                        <p>
                            {{ message.file.name }}
                        </p>
                    </div>
                </li>


            </ul>

        </div>
        <!-- lisst file -->
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCloseCircleOutline } from '@mdi/js';
import ChatService from "../services/ChatService.ts"
import { ref, reactive, watch } from 'vue';

export default {
    components: {
        SvgIcon
    },
    props: {
        user: Object
    },
    setup(props, { emit }) {
        const icons = ({
            close: mdiCloseCircleOutline
        });

        const messages = ref([]);

        const getMessage = async (to) => {
            await ChatService.getMessage(to).then(
                response => {
                    messages.value = response.data.data;
                }
            ).catch(err => {

            });
        }

        const removePopup = () => {
            emit('close-popup');
        }


        watch(props.user, async (newData, oldValue) => {
            getMessage(props.user.value.id)
        }, { immediate: false });

        return { icons, messages, removePopup };
    }
}
</script>
<style>
.list-file {
    width: 300px;
    height: 400px;
    border-radius: 10%;
    background-color: #E6ECFE;
    box-shadow: 5px 5px 5px #ccc;

}
.file p{
    word-wrap: break-word;
    word-break: break-all;
    padding: 10px 10px 10px 10px;
}
.icon-close {
    text-align: right;
    padding: 10px 10px 0 0;
}

.list-file {
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.list-file::-webkit-scrollbar {
    width: 5px;
    background-color: #E6ECFE;
}

.list-file::-webkit-scrollbar-thumb {
    background-color: #B7BDCB;
    border-radius: 6px;
}
</style>