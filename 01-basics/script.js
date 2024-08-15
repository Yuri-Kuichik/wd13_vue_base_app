const App = Vue.createApp({
    data() {
        return {
            titleCounter: 'Counter!',
            titleCalculator: 'Calculator',
            operator: 'sum',
            countFirst: 0,
            countSecond: 0,
            count: 0
        }
    }, 
    computed: {
    
      result() {
        if (this.operator === 'sum') {
            return this.countFirst + this.countSecond
        } else if (this.operator === 'subtract') {
            return this.countFirst - this.countSecond
        } else if (this.operator === 'multiply') {
            return this.countFirst * this.countSecond
        } else if (this.operator === 'divide') {
            return this.countFirst / this.countSecond
        } else {
            return 0 
        }
      }
}
})


App.mount('#app1')

