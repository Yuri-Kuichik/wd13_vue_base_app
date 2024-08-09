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
    computed: {
        postFilter() {
            if (!this.searchString) {
                return this.posts;
            }
            return this.posts.filter(post => {
                post.title.toLowerCase().includes(this.searchString.toLowerCase()) ||
                post.description.toLowerCase().includes(this.searchString.toLowerCase())
            });
        }
    },

    methods: {
        async getPosts() {
            this.loading = true
            this.posts =  await fetch(`https://studapi.teachmeskills.by/blog/posts/?author__course_group=12&limit=${this.limitPosts}&search=${this.searchString}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        this.loading = false
                        alert("Ошибка HTTP: " + response.status);
                    }
                }).then((data) => {
                    this.loading = false
                    return data.results
                })
        }
        // updatePosts() {
        //     this.getPosts()
        // }

    },
})


App.mount('#posts')