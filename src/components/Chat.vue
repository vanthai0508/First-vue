<template>
    <div class="form-chat">
        <!-- <h1>Form chat</h1> -->
        <div class="component-user">
            <Users></Users>
        </div>
        <!-- <div class="component-mesage">
            <Message></Message>
        </div> -->
    </div>

    <div class="form-chat">
        <!-- <h1>Form chat</h1> -->
        <div class="component-user">
            <Users></Users>
        </div>
        <!-- <div class="component-mesage">
            <Message></Message>
        </div> -->
    </div>

</template>

<script>
// import Chat from '../components/Chat.vue'
import Users from './Users.vue'
import Message from './Message.vue'

export default {
    components: {
        // Chat,
        Users,
        Message
        // SideBar
    },
    setup() {

    }


}
</script>
<style>
/* .form-chat {
    display: grid;
    grid-template-columns: 50% 50%; 
    
}
.component-user {
    flex: 5;
}
.component-message {
    flex: 5;
} */
</style>
