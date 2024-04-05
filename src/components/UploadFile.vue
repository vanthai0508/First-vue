
<template>
    <div class="card p-3">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" mask :style="{ right: '1rem', bottom: '1rem' }" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
// import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
import SpeedDial from 'primevue/speeddial';

export default {
    components: {
        SpeedDial
    },
    setup() {
        const router = useRouter();


const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        // command: () => {
        //     toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        // }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        // command: () => {
        //     toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        // }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        // command: () => {
        //     toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        // }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }])

    return {
        items
    }

    }
}
// const toast = useToast();
const router = useRouter();


const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        // command: () => {
        //     toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        // }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        // command: () => {
        //     toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        // }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        // command: () => {
        //     toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        // }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
</script>
