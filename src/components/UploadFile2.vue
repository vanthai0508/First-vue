<template>
    <div class="speed-dial">
        <div class="icons">
            <ul v-show="speedShow">
                <li>
                    t
                </li>
                <li>
                    t
                </li>
                <li>
                    <!-- t<ImageIcon></ImageIcon> -->
                </li>
            </ul>
        </div>
        <button class="button-speed" @click="show">
            +
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';
// import { ImageIcon } from '@heroicons/vue'
export default {
    setup() {
        const speedShow = ref(false);

        const show = () => {
            speedShow.value = !speedShow.value;
            console.log(speedShow.value);
        }

        return {
            speedShow, show
        }
    }
}
</script>

<style>
.button-speed {
    border-radius: 50%; 
    width: 100%; 
    height: 100%; 
    background-color: #007bff; 
    color: #fff; 
    border: none; 
    font-size: 20px; 
    cursor: pointer;
}
.speed-dial {
    width: 15%;
}
.icons ul li {
    text-align: center;
}
</style>