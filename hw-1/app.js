const App = Vue.createApp({
    data() {
        return {
            message: 'Нажми на меня',
            plus: '+',
            minus: '-',
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
    }
})

App.mount('#counter')