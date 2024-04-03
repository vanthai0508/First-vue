<template>
    <div class="list-user">
        <h1>User</h1>
        <input>
        <div id="app">
        <ul>
            <li v-for="(contact, index) in contacts" :key="index">
                <img :src="contact.image" :alt="contact.name" class="contact-image">
                <span>{{ contact.name }}</span>
            </li>
        </ul>
</div>
    </div>
    
</template>
<script>
import { ref, reactive } from 'vue';
export default {
    setup() {
        const contacts = reactive([
            { name: 'John Doe', image: 'https://wallpapers.com/images/hd/itachi-face-qr35e5607yi63950.jpg' },
            { name: 'Jane Smith', image: 'https://wallpapers.com/images/hd/itachi-face-qr35e5607yi63950.jpg' },
            { name: 'Alice Johnson', image: 'https://wallpapers.com/images/hd/itachi-face-qr35e5607yi63950.jpg' }
            // Add more contacts as needed
        ]);

        return { contacts };
    }
}
</script>

<style>
    .contact-image {
    width: 100px; /* Độ rộng của hình ảnh */
    height: 100px; /* Chiều cao của hình ảnh */
    border-radius: 50%; /* Bo tròn hình ảnh để tạo hình ảnh tròn */
    margin-right: 10px; /* Khoảng cách giữa hình ảnh và tên */
}
.list-user {
    /* flex: 2; */
    max-height: 100%;
    height: 800px;
    overflow: scroll;
    width: 600px;
}
</style>