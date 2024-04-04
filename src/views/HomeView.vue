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
// import Users from '../components/Users.vue'

export default {
  components: {
    Chat,
    // Users,
    SideBar2
  },
  setup() {

  }


}
</script>


<style>
/* .form-chat-view { */
  /* background-color:aqua; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
/* } */

/* .components { */
  /* padding-left: 20%; */
  /* background-color: aqua  ; */
/* } */
.primary {
  /* padding-left: 0px;
  background-image: linear-gradient(to right bottom, #ffa400, #e74c3c);
  height: 100vh;
  width: 140vh;
  padding: 50px;
  display: grid;
  grid-template-columns: 25% 75%; 
  background-color: aqua; */
  display: flex;
}

.side-bar {
    background-color: #746969;
    width: 230px;
}
.form-chat-view {
  /* flex: 8; */
    background-color: #E6ECFE;
    /* height: 10px; */
  width: 100%
}

</style>