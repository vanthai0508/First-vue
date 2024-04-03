<template>
    <div class="form-message">
        <h1>Form chat</h1>
        <div class="components-form-message ">
            <MessageList></MessageList>
            <MessageInput></MessageInput>
        </div>  
    </div>

</template>

<script>
// import Chat from '../components/Chat.vue'
import MessageList from './MessageList.vue'
import MessageInput from './MessageInput.vue'

export default {
    components: {
        // Chat,
        MessageList,
        MessageInput
    },
    setup() {

    }


}
</script>
<style>
.form-message {
    /* width: 600px; */
}
</style>