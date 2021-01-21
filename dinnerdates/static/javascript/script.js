let vm = new Vue ({
    el: '#dashboard',
    data: {
        currentUser: {},
    },
    created: function () {
        this.getCurrentUser()
    },
    methods: {
        getCurrentUser: function () {
            axios({
                method: 'get',
                url: '/api/v1/currentuser/',
            }).then(response => {
                this.currentUser = response.data
            })
        }
    }
}) 