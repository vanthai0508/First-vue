<template>
    <div class="form-message">
        <h1>Form chat</h1>
        <div class="info-user-message">
            <div class="info-basic-message">
                <img :src="contact.image" :alt="contact.name" class="image-message">
                <div class="div-name-message">
                    <span class="name-user-message">{{ contact.name }}</span>
                    <span class="info-message">{{ contact.info }}</span>
                </div>
                <div class="actions">
                    <img :src="icons.iconFile" class="image-actions">
                    <img :src="icons.iconFile" class="image-actions">
                </div>
            </div>
        </div>
        <div class="components-form-message ">
            <MessageList></MessageList>
            <MessageInput></MessageInput>
        </div>
    </div>

</template>

<script>
// import Chat from '../components/Chat.vue'
import { ref, reactive } from 'vue';
import MessageList from './MessageList.vue'
import MessageInput from './MessageInput.vue'

export default {
    components: {
        // Chat,
        MessageList,
        MessageInput
    },
    setup() {
        const contact = reactive(
            { name: 'John Doe', info: '..test', image: 'https://wallpapers.com/images/hd/itachi-face-qr35e5607yi63950.jpg', content: 'Font chữ chính là kiểu chữ, mẫu mã của chữ. Ví dụ, một số font chữ quen thuộc như: Times New Roman, Arial, Lucida Console' },
            // Add more contacts as needed
        );
        const icons = reactive(
            {
                iconFile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qfPfkOGALxXgiMXdZQNW9HKFMwcwrQ0X9MZ1OKdDpw&s"
            }
        )

        // const test = () => {
        //    console.log('test');
        // }

        // test('should first', () => { second })
        return { contact, icons };
    }


}
</script>
<style>
.image-message {
    width: 50px;
    /* Độ rộng của hình ảnh */
    height: 50px;
    /* Chiều cao của hình ảnh */
    border-radius: 50%;
}

.image-actions {
    /* position: absolute; */
    width: 40px;
    /* Độ rộng của hình ảnh */
    height: 40px;
    /* Chiều cao của hình ảnh */
    border-radius: 50%;
    padding: 10%;
}

.info-basic-message {
    display: flex   ;
    margin: 15px;
}

.actions{
    position: absolute;
  right: 5%;
  display: flex;
    /* text-align: right; */
}
/* .actions img {
    padding-left: 10%;
} */
.div-name-message {
    margin-left: 5%;
    display: grid;
    text-align: left;
}

.info-user-message {
    background-color: white;
    width: 95%;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 4%;
    font-size: 18px;
    font-family: 'Noto Sans';
}
.name-user-message {
    font-weight: bold;
}
.info-message {
    color: #2A8BF2;
}
</style>