<template>
    <main>
        <!-- <TheWelcome /> -->


        <div class="primary">
            <div class="side-bar">
                <SideBar2></SideBar2>
            </div>
            <div class="form-chat-view">
                <Chat></Chat>
            </div>
        </div>

    </main>
</template>
<script>

import TheWelcome from '../components/TheWelcome.vue'
import SideBar2 from '@/components/SideBar2.vue';
import Chat from '../components/Chat.vue'

export default {
    components: {
        Chat,
        SideBar2
    },
    setup() {
    }


}
</script>


<style>
.primary {
    display: flex;
}

.side-bar {
    background-color: #746969;
    width: 230px;
}

.form-chat-view {
    background-color: #E6ECFE;
    width: 100%
}
</style>