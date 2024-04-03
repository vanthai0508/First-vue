<template>
    <div>
        <button @click="openFormAdd">ADD</button>
    </div>
    <div class="te">
      <h1>This is users</h1>
      <ListUser @send-user="handleUser" :callApi="callApi"></ListUser>
    </div>
    <div>
        <DetailUser :user = "user" :action = "action" v-show="isShow" @send-close="handleSendClose"/>
    </div>
</template>
<script>
    import ListUser from '../components/ListUser.vue'
    import DetailUser from '../components/DetailUser.vue'
    export default {
        data() {
            return {
                isShow: '',
                user: {},
                action: '',
                userAdd: {},
                id: 4,
                userEdit: {},
                callApi: true,
            }
        },
        components: {
            ListUser,
            DetailUser
        },
        methods: {
            handleUser(user){
                // console.log('thai', user);
                this.user = user;
                this.action = false;
                this.isShow = true;
            },
            handleSendClose(){
                this.isShow = false;
                this.callApi = !this.callApi;
            },
            openFormAdd(){
                this.user = {};
                this.isShow = true;
                this.action = true;
            },
            // handleAddUser(){
                // console.log(user, 'handle');
                // console.log('add ha')
                // userAdd.id = this.id ++;
                // this.userAdd = userAdd;
            //     console.log(this.callApi, 'handle')
            //     this.handleSendClose();
                
            // },
            // handleEditUser(userEdit){
            //     console.log(userEdit, 'handleEdit');
            //     this.callApi = !this.callApi;
                // this.userEdit = userEdit;
                // console.log('add ha')
                // userAdd.id = this.id ++;
                // this.userAdd = userAdd;
                // this.handleSendClose();
            // }
        },
        created() {
            console.log('created user view', this.isShow)
        }
    }
</script>
