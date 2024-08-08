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

	created() {
			this.getPosts();
	},
});

App.mount('#posts');
