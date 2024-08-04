const App = Vue.createApp({
	data() {
		return {
			titleCounter: 'Counter',
			titleCalculator: 'Calculator',
			counter: 0,

			operator: '',
			countFirst: 0,
			countSecond: 0,
		}
	},

	methods: {
		increment() {
			this.counter++
		},
		decrement() {
			this.counter--
		},

		setOperator(operator) {
			this.operator = operator
		}
	},

	computed: {
		result() {
			let result = 0;

			switch (this.operator) {
				case 'sum':
					result = this.countFirst + this.countSecond;
					break;
				case 'subtract':
					result = this.countFirst - this.countSecond;
					break;
				case 'multiply':
					result = this.countFirst * this.countSecond;
					break;
				case 'divide':
					result = this.countFirst / this.countSecond;
					break;
			}

			return result
		}
	}
})


App.mount('#app1')