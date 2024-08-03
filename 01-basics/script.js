const App = Vue.createApp({
    data() {
        return {
            titleCounter: 'Counter!',
            titleCalculator: 'Calculator',
            operator: '',
            countFirst: 0,
            countSecond: 0
        }
    }
})


App.mount('#app1')