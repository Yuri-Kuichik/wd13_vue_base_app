const App = Vue.createApp({
    data() {
        return {
            titleApp: 'Пожалуйста, введите поисковый запрос и нажмите клавишу ENTER',
            posts: [],
            searchString: '',
            limitPosts: 5,
            loading: false
        }
    },
    
    async created() {
        await this.getPosts()
    },

    methods: {
        async getPosts() {
            this.loading = true
            this.posts =  await fetch(`https://studapi.teachmeskills.by/blog/posts/?author__course_group=12&limit=${this.limitPosts}&search=${this.searchString}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
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