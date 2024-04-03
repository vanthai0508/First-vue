<template>
    <div>
        <h1>USERS</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>From</th>
            </tr>
            <tr v-for="(user, index) in users">
                <th>{{ user.name }}</th>
                <th>{{ user.age }}</th>
                <th>{{ user.from }}</th>
                <th>
                    <button @click="sendUser(user.id)">Sửa</button>
                </th>
                <th>
                    <button @click="deleteUser(user.id)">Xóa</button>
                </th>
            </tr>
        </table>
    </div>
</template>
<script>
import UserService from "@/services/UserService";
import { setAccessToken } from "../utils/authenticate.js";
export default {
    props: ['callApi'],
    data() {
        return {
            users: {},
        }
    },
    methods: {
        async load() {
            await UserService.getAll().then(({ data }) => {
             this.users = data;
          })
        },
        list() {
            let users = [
                {
                    id: 1,
                    name: 'thai',
                    age: 18,
                    from: 'vietnam'
                },
                {
                    id: 2,
                    name: 'huy',
                    age: 18,
                    from: 'sin'
                },
                {
                    id: 3,
                    name: 'khoa',
                    age: 19,
                    from: 'japan'
                },
            ];
            this.users = users;
        },
        sendUser(id) {
            const user = this.users.find((user) => user.id === id);
            this.$emit('send-user', user);
        },
        async deleteUser(id) {
            // let userRemove = this.users.findIndex(obj => obj.id === id);
            // userRemove !== -1 ? this.users.splice(userRemove, 1) : null;
            await UserService.delete(id).then(({data}) => {
                this.load();
            })
        }
    },
    created() {
        // this.list();
        setAccessToken('9|ywHuoBVaUuRPuRwgONj7v8dm6ddXcu5yajwKxULr15be5578');
        this.load();
        // this.$watch('userAdd', (newValue) => {
        //     if (Object.keys(newValue).length !== 0) {
        //         let idObject = this.users[this.users.length - 1].id;
        //         let newData = { ...newValue };
        //         newData.id = idObject + 1;
        //         this.users.push({ ...newData });
        //     }
        // }, { deep: true, immediate: true });
        // this.$watch('userEdit', function (newValue) {
        //     let userRemove = this.users.findIndex(obj => obj.id === this.userEdit.id);
        //     userRemove !== -1 ? this.users.splice(userRemove, 1) : null;
        //     this.users.push({ ...newValue });
        //     this.users.sort((a, b) => a.id - b.id);
        // }, { deep: true });
        this.$watch('callApi', function(newData) {
            console.log('change');
            this.load();
        });

    },
}
</script>
<style>
th,
td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

tr:hover {
    background-color: coral;
}
</style>@/axiosIn../axios