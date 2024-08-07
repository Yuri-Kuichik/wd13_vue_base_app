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

    },
})


App.mount('#posts')