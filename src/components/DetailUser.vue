<template>
    <div>
        <form id="yu">
            <label>Name: </label><input :value = "action ? '' : user.name" id="name" ><br>
            <label>Age: </label><input :value="action ? '' : user.age" id="age"><br>
            <label>From: </label><input :value="action ? '' : user.from" id="from"><br>
            <input type="button" @click="addUser" value="Add">
            <input type="button" @click="editUser" value="Edit">
            <input type="button" @click="sendClose"  value="close">
        </form>
    </div>
</template>
<script>
import UserService from "@/services/UserService";
import { getAccessToken } from "../utils/authenticate.js";
export default {
    props: ['user', 'action'],
    data() {
        return {
            id: '',
        }
    },
    methods: {
        sendClose() {
            // this.$emit('send-close');
            console.log(getAccessToken());

        },
        async addUser() {
            const user = this.getData();

            await UserService.create(user).then(({data, status}) => {
                console.log(data, status);
                console.log('addd');
                // this.$emit('add-user');
                this.$emit('send-close');
            });
            
            // console.log('add');
        },
        getData() {
            let data = {};
            data.name = document.getElementById('name').value;
            data.age = document.getElementById('age').value;
            data.from = document.getElementById('from').value;
            data.email = 'test@gmail.com';
            return data;
        },
        async editUser() {
            const user = this.getData();
            // this.action !== true ? user.id = this.user.id : null;
            // this.$emit('edit-user', user);
            await UserService.update(this.user.id, user).then(({data, status}) => {
                console.log(status);
                this.$emit('send-close');
            });
        }
    },
    updated() {
        // console.log('update detail')
    },
    created() {
        console.log('Created in detail user')
    }
}
</script>
<style>
form {
    border: 1px solid #ddd;
}
</style>