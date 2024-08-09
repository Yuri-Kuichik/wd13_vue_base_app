

const { createApp } = Vue;

createApp({
    data() {
        return {
            firstOperand: 0,
            secondOperand: 0,
            operator: '+'
        };
    },
    computed: {
        result() {
            switch (this.operator) {
                case '+':
                    return this.firstOperand + this.secondOperand;
                case '-':
                    return this.firstOperand - this.secondOperand;
                case '*':
                    return this.firstOperand * this.secondOperand;
                case '/':
                    return this.secondOperand !== 0 ? this.firstOperand / this.secondOperand : 'Error';
                default:
                    return 'Invalid Operator';
            }
        }
    }
}).mount('#app');



