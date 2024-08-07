// const App = Vue.createApp({
//     data() {
//         return {
//             message: 'Нажми на меня',
//             plus: '+',
//             minus: '-',
//             count: 0
//         }
//     },
//     methods: {
//         increment() {
//             this.count++
//         },
//         decrement() {
//             this.count--
//         }
//     }
// })
//
// App.mount('#counter')

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

// const { createApp } = Vue;
//
// createApp({
//     data() {
//         return {
//             operand1: 0,
//             operand2: 0,
//             operator: '+'
//         };
//     },
//     computed: {
//         result() {
//             switch (this.operator) {
//                 case '+':
//                     return this.operand1 + this.operand2;
//                 case '-':
//                     return this.operand1 - this.operand2;
//                 case '*':
//                     return this.operand1 * this.operand2;
//                 case '/':
//                     return this.operand2 !== 0 ? this.operand1 / this.operand2 : 'Error';
//                 default:
//                     return 0;
//             }
//         }
//     }
// }).mount('#app');
//


