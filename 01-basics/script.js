const App = Vue.createApp({
    data() {
        return {
            titleCounter: 'Counter',
            titleCalculator: 'Calculator',
            operator: '',
            countFirst: 0,
            countSecond: 0,
            countValue: 0
        }
    },
    methods: {
        increment() {
            this.countValue++
        },
        decrement() {
            this.countValue--
        },
        setOperator(op) {
            this.operator = op
        }
    },
    computed: {
        calculatedResult() {
            switch(this.operator) {
                case 'sum':
                    return this.countFirst + this.countSecond
                case 'subtract':
                    return this.countFirst - this.countSecond
                case 'multiply':
                    return this.countFirst * this.countSecond
                case 'divide':
                    return this.countSecond !== 0 ? this.countFirst / this.countSecond : 'Error'
                default:
                    return 0
            }   
        }
    }
})

App.mount('#app1')