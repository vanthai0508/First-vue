<template>
    <div class="thai">
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="container">
                <h1>Form Đăng Nhập</h1>
                <p>Xin hãy nhập biểu mẫu bên dưới để đăng nhập.</p>
                <hr>
                <label for="Email"><b>Email</b></label>
                <input type="text" v-model="formInput.email" placeholder="Email" name="Email" required>
                <label for="Password"><b>Password</b></label>
                <input type="password" v-model="formInput.password" placeholder="Password" name="Password" required>
                <!-- <label>
                    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Nhớ Đăng Nhập
                </label> -->
                <div class="clearfix">
                    <button type="submit" class="signupbtn">Sign in</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import AuthService from "../services/AuthService.ts"
import { ref, reactive } from 'vue';
import { setAccessToken, setUserInfo } from "../utils/authenticate.js";
import { useRouter } from 'vue-router'
import { mdiSleep } from "@mdi/js";

export default {
    setup() {
        const formInput = reactive({ email: '', password: '' })

        const router = useRouter();

        const login = async () => {
            await AuthService.login(formInput)
                .then(response => {
                    setAccessToken(response.data.data.token);
                    setUserInfo(response.data.data.user.id);
                    setTimeout(() => {
                        router.push({ path: '/home' });
                    }, 2000);
                })
                .catch(err => {
                    console.log('Error', err);
                });
        }

        return {
            formInput, login
        }
    },

}
</script>
<style>
body {
    font-family: 'Noto Sans JP', sans-serif;
}

h1,
label {
    color: DodgerBlue;
}

input[type=text],
input[type=password] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    width: 100%;
    resize: vertical;
    padding: 15px;
    border-radius: 15px;
    border: 0;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

input[type=text]:focus,
input[type=password]:focus {
    outline: none;
}

hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

button:hover {
    opacity: 1;
}

.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

.signupbtn {
    float: left;
    width: 100%;
    border-radius: 15px;
    border: 0;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

.container {
    padding: 16px;
    width: 800px;
    text-align: center;
    display: inline-block;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
</style>