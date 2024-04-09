<template>
    <div class="speed-dial">
        <ul class="dials">
                <input @change="onFileChange($event)" type="file" ref="file" style="display: none" />
            
            <li @click="$refs.file.click()">
                <a class="bg-twitter"   href="#">
                    <svg-icon type="mdi" :path="icons.video" :style="{ color: 'white' }"></svg-icon>

                </a>
            </li>
            <li @click="$refs.file.click()">
                <a class="bg-facebook" href="#">
                    <svg-icon type="mdi" :path="icons.image" :style="{ color: 'white' }"></svg-icon>
                </a>
            </li>
            <li @click="$refs.file.click()">
                <a class="bg-google-plus" href="#">
                    <svg-icon type="mdi" :path="icons.file" :style="{ color: 'white' }"></svg-icon>
                </a>
            </li>
        </ul>
        <a class="toggle bg-share"><span class="fa fa-share-alt">+</span></a>

    </div>


</template>
<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import { ref, reactive } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiImage, mdiFilmstrip, mdiFile } from '@mdi/js';
import UploadService from "../services/UploadService.ts"

export default {
    components: {
        MenuIcon,
        SvgIcon
    },
    setup() {
        const icons = reactive(
            {
                video: mdiFilmstrip,
                image: mdiImage,
                file: mdiFile,
            }
        )
        const file = ref(null);
        const fileUpload = reactive({});

        const onFileChange = (event) => {
            file.value = event.target.files[0];
            console.log('thai');

            
            uploadFile()
        }

        const uploadFile = async() => {
            const formInput = new FormData();
            formInput.append('files', file.value)
            await UploadService.uploadFile(formInput)
            .then(response => {
                fileUpload.value = response.data.data;
            })
            .catch(err => {
                console.log('err', err);
            })
            
        }

        return { icons, onFileChange, uploadFile }
    }


}
</script>
<style lang="scss">
@mixin circle($size) {
    display: inline-block;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 32px;
    line-height: 25px;

    @if $size ==tiny {
        width: 25px;
        height: 25px;
        font-size: 24px;
        // line-height: 50px;
    }
}

@keyframes pop-in {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes pop-out {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}

.speed-dial {
    display: inline-block;

    a,
    a:active,
    a:visited,
    a:focus {
        color: #fafafa;
        display: inline-block;
        text-decoration: none;
    }

    .toggle {
        @include circle(small);
        margin-top: 20%;
        background-color: #2A8BF2;
        text-align: center;
    }

    &:hover .dials a {
        animation: pop-in .3s ease both;
    }

    .dials {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            margin-top: 40%;

            a {
            @include circle(tiny);

            transform: scale(0);
            animation: pop-out .3s ease both;
        }
        }

        
    }
}

.bg-twitter {
    background-color: #2A8BF2;
}

.bg-facebook {
    background-color: #2A8BF2;
}

.bg-google-plus {
    background-color: #2A8BF2;
}

body {
    background-color: #eee;
    padding: 0 50px;
}
</style>