<template>
    <div class="list-user">
        <h1>User</h1>
        <div class="search-container">
            <input type="text" v-model="selected" class="search" placeholder="Search..." @keyup.enter="getAll(selected)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3751OuTtZ0Ovh-NtGF_4n_CQ6T-4u_9TA8iGd-v2EDw&s"
                alt="Search Icon" class="search-icon">
        </div>
        <div class="select">
            <ul>
                <li v-for="result in filted" :key="result.id"  @click="getAll(result.name)">{{ result.name }} </li>
            </ul>
        </div>

        <div class="items">
            <ul>
                <li v-for="(contact, index) in contacts" :key="index">
                    <div class="item" @click="sendUser(contact)">
                        <div class="info-basic">
                            <img :src="contact.image" :alt="contact.name" class="contact-image">
                            <div class="div-name">
                                <span class="name-user">{{ contact.name }}</span>
                                <span class="info">{{ contact.info }}</span>
                            </div>
                        </div>
                        <div class="content">
                            {{ contact.content }}
                        </div>

                    </div>
                </li>
            </ul>
        </div>

    </div>

</template>
<script>
import { ref, reactive, watch } from 'vue';
import UserService from '@/services/UserService';
import AutoComplete from 'primevue/autocomplete';

export default {
    components: {
        AutoComplete
    },
    setup(_, { emit }) {
        const contacts = ref([]);

        const getAll = async (key) => {
            filted.value = [];
            await UserService.getAll(key).then(
                response => {
                    contacts.value = response.data.data;
                }
            ).catch(err => {
                console.log(err, 'error list user');
            });
        }

        const selected = ref();
        const filted = ref([]);

        const filterUser = () => {
            filted.value = contacts.value.filter(contact => {
                if(contact.name.toLowerCase().includes( selected.value.toLowerCase()))
                {
                    return contact.name;
                }
            });
        }

        watch(selected, async (newValue, oldValue) => {
            filterUser()

            console.log(selected.value, 'dshajd')
            if(!selected.value) {
                filted.value = [];
            }
        }, { immediate: false });

        getAll();

        const sendUser = (user) => {
            emit('send-user', user);
        }


        return { contacts, sendUser, selected, filted, filterUser, getAll };
    }
}
</script>

<style>
.select {
    border:1px solid #ccc;
    width: 86.5%;
    margin-left: 10%;
    background-color: white;
    position: absolute;
    font-size: 18px;
    font-family: 'Noto Sans';

}
.select ul li {
    height: 10%;
    text-align: left;
    padding-left: 10%;
    padding-top: 2%;
}

.select ul {
    margin:0;
}
.list-user h1 {
    text-align: left;
    margin-left: 10%;
}

.contact-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.div-name {
    margin-left: 5%;
    display: grid;
    text-align: left;
}

.info {
    color: #2A8BF2;
    font-size: 18px;
    font-family: 'Noto Sans';
    /* font-weight: bold; */
}

.name-user {
    font-size: 18px;
    font-family: 'Noto Sans';
    font-weight: bold;
}

.info-basic {
    display: flex;
    padding-left: 7%;
}

.content {
    text-align: left;
    margin-left: 7%;
    margin-right: 20%;
    color: #707C97;
    font-family: 'Noto Sans';
}

/* .item span {
    padding : 50px;
} */
.list-user {
    /* flex: 2; */
    max-height: 100%;
    height: 800px;
    text-align: center;
    /* border: 3px solid black; */
    /* border-style: outset; */
    overflow-y: scroll;
    position: relative;
    /* padding: 12px; */
    /* width: 600px; */
    /* khong set cung thay bang % de tu co */
}

.list-user::-webkit-scrollbar {
    width: 5px;
    /* Độ rộng của thanh cuộn */
    background-color: #E6ECFE;
}

.list-user::-webkit-scrollbar-thumb {
    background-color: #B7BDCB;
    border-radius: 6px;
}

.item {
    background-color: white;
    /* margin: 0 auto; */
    padding-top: 7%;
    padding-bottom: 7%;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

}

.items {
    padding-left: 10%;
    padding-right: 4%;
}

.items ul li {
    padding-top: 3%;
    /* border-bottom:  solid #ccc; Border dưới */
    /* box-shadow: 0 3px 0px rgba(0, 0, 0, 0.1);  */
}

/* .search {
    width: 80%;
    height: 10%;
} */

.search-container {
    position: relative;
    width: 80%;
    margin: 0 auto;
}

.search {
    width: 90%;
    padding: 10px 10px 10px 10px;
    /* Có khoảng trống bên phải để làm chỗ cho icon */
    font-size: 20px;
    border: 1px solid #ccc;
    /* border-radius: 5px; */
    padding-left: 15%;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

}

.search-icon {
    width: 5%;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    text-align: left;
}
</style>