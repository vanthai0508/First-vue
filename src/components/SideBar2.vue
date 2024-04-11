<template>
    <!-- <div id="app"> -->
    <div class="sidebar">
        <img src="https://wallpapers.com/images/hd/itachi-face-qr35e5607yi63950.jpg" alt="Avatar" class="avatar">
        <h1>田中 太郎</h1>
        <div class="bar">
            <ul>
            <li v-for="item in sidebarItems" :key="item.id">
                <a :href="item.url">
                    <!-- <img :src="item.icon" alt="icon" class="icon"> -->
                    <svg-icon class="icon-side" type="mdi" :path="item.icon" ></svg-icon>
                    {{ item.label }}
                </a>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { ref, reactive } from 'vue';
import { mdiMessageMinus, mdiChat, mdiAccountOutline, mdiBellOutline, mdiLogout  } from '@mdi/js';

export default {
    components: {
        SvgIcon
    },
    setup() {
        const sidebarItems = ref([
            { id: 1, label: 'チャット', url: '/', icon: mdiChat },
            { id: 2, label: 'コンタクト', url: '/about', icon: mdiAccountOutline },
            { id: 3, label: 'お知らせ', url: '/contact', icon: mdiBellOutline },
            { id: 4, label: 'ログアウト', url: '/logout', icon: mdiLogout  }
        ])

        return { sidebarItems }
    }
};
</script>

<style>

.icon-side {
    height: 18px;
}

.bar {
    text-align: left;
    padding-top: 20%;
}

.sidebar h1 {
    text-align: center;
    margin-top: 0;
    padding-top: 0px;
    font-size: 20px;
    font-family: 'Noto Sans';

}
.sidebar {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #faf8f8;
    padding-top: 20px;
    font-size: 20px;
    font-family: 'Noto Sans';
    display: block;
    text-align: center;
}

ul {
    list-style-type: none;
    padding: 0;
}

.bar ul li {
    padding-top: 40px;
    /* pa */

}

.bar ul li a {
    text-decoration: none;
    color: #555252;
    border-left: 4px solid transparent;
    transition: border-left-color 0.3s;
    padding-left: 30px;
}

.sidebar a:hover {
    color: #3089ce;
    border-left-color: #3089ce;
}

.icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.avatar {
    /* padding: 40px; */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
}
</style>