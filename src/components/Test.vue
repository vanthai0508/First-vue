<script>
// import { ref } from 'vue'

// const test = ref("tests")
// const count = ref(0)
// function incre() {
//     count.value++
// }
export default {
    // setup() {
    //     const test = ref('tesst')

    //     const count = ref(0)
    //     function incre() {
    //         count.value++
    //     }
    //     console.log('created', document.getElementById('app'))
    //     return { test, count, incre }

    // },
    data() {
        return {
            count: 12,
            cars: {},
            test: "test input"
        }
    },
    watch: {
        count: function () {
            console.log('update');
        }
    },
    methods: {
        incre() {
            this.count = 14;
            console.log(this.test);
        }
    },
    created() {
        console.log('created', document.getElementById('test-btn'))
        let cars = [
            {
                number: 123,
                name: "MEC"
            },
            {
                number: 124,
                name: "HONDA"
            },
        ];
        this.cars = cars;
    },
    mounted() {
        console.log('dsjdsa', document.getElementById('test-btn'))
    }
}
</script>

<template>
    <div>
        <p>This is test</p><br>
        <table>
            <tbody>
                <tr v-for="(car, index) in cars" :key="car.number">
                    {{ car.name }}
                </tr>
            </tbody>
            
        </table>
        <form>
            <input v-model="test" >
            <span>{{ test }}</span>
        </form>
        <button id="test-btn" @click="incre">Click</button>
        <span>{{ this.count }}</span>
    </div>
</template>

<style>
#test-btn {
  color: #2c00cc;
  background-color: rgb(0, 153, 255);
  width: 150px; /* was 150, now 150px */
  height: 50px;
}
</style>