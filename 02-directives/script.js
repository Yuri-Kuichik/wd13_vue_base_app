const App = Vue.createApp({
    data() {
        return {
            titleApp: 'Posts list',
            posts: [],
            searchString: '',
            limitPosts: 5,
            loading: false,
            // post: {
            //     "id": 1430,
            //     "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A5%D1%83%D0%BA%D0%B8_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B8%D0%BA%D0%BB%D0%B0_01.png",
            //     "text": "Продолжаем работать с  Vue.js. Сегодня будем проходить директивы во Vue.js, работа с элементами формы, работа с событиями, наблюдатели (watchers), хуки жизненного цикла, базовые компоненты, условная отрисовка и другое.",
            //     "date": "2024-08-05",
            //     "lesson_num": 62,
            //     "title": "Директивы Vue.js",
            //     "description": "Директивы Vue. js — это специальные HTML-атрибуты, используемые для манипулирования DOM (Document Object Model) и изменения ее поведения на основе данных вашего приложения.\r\n\r\nВсе хуки жизненного цикла автоматически привязывают свой контекст this к экземпляру, поэтому есть доступ к локальному состоянию, вычисляемым свойствам и методам. Нельзя использовать стрелочные функции при определении хука жизненного цикла (например, created: () => this.fetchTodos()). Причина в том, что стрелочные функции привязываются к родительскому контексту, поэтому this не будет экземпляром компонента и this.fetchTodos будет неопределён.",
            //     "author": 8583
            // }
    
        }
    },
    
    
    methods: {
        async getPosts() {
            this.loading = true
            this.posts =  await fetch(`https://studapi.teachmeskills.by/blog/posts/?author__course_group=12&limit=${this.limitPosts}&search=${this.searchString}`)
                .then(async (response) => {
                    if (response.ok) {
                        return await response.json()
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

    async created() {
        console.log(this);
        await this.getPosts()
        
    } 
})


App.mount('#posts')