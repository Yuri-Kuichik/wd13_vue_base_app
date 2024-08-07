const App = Vue.createApp({
	data() {
			return {
					titleApp: 'Posts list',
					posts: [],
					searchString: '',
					limitPosts: 5,
					loading: false
			}
	},

	methods: {
			async getPosts() {
					this.loading = true;
					try {
							const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/?author__course_group=12&limit=${this.limitPosts}&search=${this.searchString}`);
							if (!response.ok) {
									throw new Error(`HTTP error! status: ${response.status}`);
							}
							const data = await response.json();
							this.posts = data.results;
					} catch (error) {
							alert(error.message);
					} finally {
							this.loading = false;
					}
			}
	},

	beforeCreate() {
			console.log('beforeCreate:', this.titleApp);
			console.log('beforeCreate:', document.querySelector('#posts'));
	},
	created() {
			console.log('created:', this.titleApp);
			console.log('created:', document.querySelector('#posts'));
	},
	beforeMount() {
			console.log('beforeMount:', this.titleApp);
			console.log('beforeMount:', document.querySelector('#posts'));
	},
	mounted() {
			console.log('mounted:', this.titleApp);
			console.log('mounted:', document.querySelector('#posts'));
			this.getPosts();
	},
	beforeUpdate() {
			console.log('beforeUpdate:', this.titleApp);
			console.log('beforeUpdate:', document.querySelector('#posts'));
	},
	updated() {
			console.log('updated:', this.titleApp);
			console.log('updated:', document.querySelector('#posts'));
	},
	beforeUnmount() {
			console.log('beforeUnmount:', this.titleApp);
			console.log('beforeUnmount:', document.querySelector('#posts'));
	},
	unmounted() {
			console.log('unmounted:', this.titleApp);
			console.log('unmounted:', document.querySelector('#posts'));
	}
});

App.mount('#posts');
