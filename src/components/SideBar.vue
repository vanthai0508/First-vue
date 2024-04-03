<template>
    <!-- <div class="avatar-container">
                <img src="https://wallpapers.com/images/hd/itachi-face-qr35e5607yi63950.jpg" alt="Avatar" class="avatar">
            </div> -->
        <div class="side">
            <sidebar-menu :menu="menu" width="190px" class="menu" />
        </div>
</template>

<script>
//   import HelloWorld from "./components/HelloWorld";
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


export default {
    name: "App",
    components: {
        //   HelloWorld,
        SidebarMenu
    },
    data() {
        return {
            menu: [
                {
                    header: true,
                    title: "Main Navigation"
                },
                {
                    href: "/",
                    title: "Dashboard",
                    icon: "fa fa-envelope"
                },
                {
                    title: "Charts",
                    icon: "fa fa-message",
                    // child: [
                    //     {
                    //         href: "/charts/sublink",
                    //         title: "Sub Link"
                    //     }
                    // ]
                },
                {
                    
                }
            ]
        };
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0c76c7;
    margin-top: 60px;
}

.v-sidebar-menu.vsm-collapsed {
    width: 100px;

}

.menu {}

.v-sidebar-menu {
    background: #f8f8f7
}

.v-sidebar-menu:hover {
    --vsm-item-hover-bg: rgba(239, 239, 247, 0.5);
    /* sử dụng rgba() để chỉ định màu và độ trong suốt */
    color: #3089ce;
}

.v-sidebar-menu .vsm--link {
    color: rgb(65, 64, 64);
    padding: 30px;
}

.v-sidebar-menu .vsm--link:hover {
    color: #2A8BF2;
}

/* Font Awesome Icons */

</style>