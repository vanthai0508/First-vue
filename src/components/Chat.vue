<template>
    <div class="form-chat">
        <!-- <h1>Form chat</h1> -->
        <div class="component-user">
            <Users @send-user="handleSendUser"></Users>
        </div>
        <div class="component-message">
            <Message :user="user"></Message>
        </div>
    </div>

    

</template>

<script>
// import Chat from '../components/Chat.vue'
import Users from './Users.vue'
import Message from './Message.vue';
import { reactive } from 'vue';

export default {
    components: {
        Users,
        Message
    },
    setup() {
        const user = reactive({});
        const handleSendUser = (userSend) => {
            user.value = userSend;
        }
        return {handleSendUser, user}

    }


}
</script>
<style>
.form-chat {
    display: grid;
    grid-template-columns: 50% 50%;
    
}
.component-user {
    padding: 30px;
}


</style>
