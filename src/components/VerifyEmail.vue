<template>

</template>
<script>
import { ref, reactive } from 'vue';
import AuthService from "../services/AuthService.ts"
import { useRouter } from 'vue-router'

export default {
    setup() {
        console.log('verify fe');
        // const data = reactive({ expires: '', signature: '' });
        const router = useRouter();

        // Lấy tham số từ đường dẫn
        const verifyEmail = async () => {
            const userId = router.currentRoute.value.params.userId;
            const hash = router.currentRoute.value.params.hash;
            const expires = router.currentRoute.value.query.expires;
            const signature = router.currentRoute.value.query.signature;

            // Thực hiện các hành động cần thiết với các tham số này
            // console.log("User ID:", userId);
            // console.log("Hash:", hash);
            // console.log("Expires:", expires);
            // console.log("Signature:", signature);

            await AuthService.verify(userId, hash, expires, signature)
                .then(response => {
                    router.push({ path: '/login' })
                })
                .catch(err => {
                    console.log('Error', err);
                });
            // Gọi API xác minh email với các tham số này...
        }

        // Gọi hàm xác minh email khi component được tạo ra
        verifyEmail();
    }
}
</script>