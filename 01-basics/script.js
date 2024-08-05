const App = Vue.createApp({
    data() {
        return {
            titleCounter: 'Counter',
            titleCalculator: 'Calculator',
            operator: '',
            countFirst: 0,
            countSecond: 0,
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    },
    computed: {
        calculation() {
            if (this.operator === 'sum') {
                return this.countFirst + this.countSecond
            }
            if (this.operator === 'subtract') {
                return this.countFirst - this.countSecond
            }
            if (this.operator === 'multiply') {
                return this.countFirst * this.countSecond
            }
            if (this.operator === 'divide') {
                return this.countFirst / this.countSecond
            }
            return 0
        }
    }
})


App.mount('#app1')