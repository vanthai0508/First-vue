<script>
import { setAccessToken, setUserInfo } from "../utils/authenticate.js";
import { useRouter } from 'vue-router'

export default {
    setup(){
        const router = useRouter();

        const logout = () => {
            setAccessToken();
            setUserInfo();
            console.log('htuejsf');
            router.push({path: '/login'})
        }

        logout()
    }
}
</script>