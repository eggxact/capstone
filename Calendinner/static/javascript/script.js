let vm = new Vue ({
    el: 'dashboard',
    data: {
        preferences: {}
    },
    methods: {
        loadPreferences: function () {
            axios({
                method: 'get',
                url: "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
                params: {
                    key: "AIzaSyAub8T3ipcLfuHDpGFzrl4Kt84OClHBEoU",
                    input: "7580 N Gilbert Ave Portland Or",
                    inputtype: "textquery"
                }
            }).then( response => {
                this.preferences = response.candidates
                console.log(data)
            })
        }
    },
    created: function () {
        this.loadPreferences()
    }
})