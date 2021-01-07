Vue.component("user-info", {
    template: `
        <div id="user-address">
            <input v-model="street" type="text" placeholder="street">
            <input v-model="city" type="text" placeholder="city">
            <input v-model="state" type="text" placeholder="state">
            <input v-model="zipcode" type="text" placeholder="zip code">
            <br>
            <button @click="getLocation" type="submit">Update Address</button>
            <div v-for="location in locations" :key=location id="address-verification">
                <p>{{ location.formatted_address }}</p>
                <button type="submit" @click="submitLocation(location)">This is my address</button>
            </div>
        </div>
    `,
    data: function () {
        return {
            locations: {},
            street: '',
            city: '',
            state: '',
            zipcode: '',
            lat: '',
            lng: '',

        }
    },
    created: {
        getUser: function () {
            axios({
                method: 'get',
                url: 'api/v1/',
                
            })
        }
    },
    computed: {
        userAddress: function () {
            return `${this.street}, ${this.city}, ${this.state} ${this.zipcode}`
        }
    },
    methods: {
        getLocation: function () {
            axios({
                method: 'get',
                url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
                params: {
                    key: "AIzaSyAub8T3ipcLfuHDpGFzrl4Kt84OClHBEoU",
                    input: this.userAddress, 
                    inputtype: "textquery",
                    fields: "formatted_address,name,geometry",
                },
            }).then( response => {
                this.locations = response.data.candidates
                console.log(this.locations)
            })
        },
        submitLocation: function (location) {
            axios({
                method: "patch",
                url: `/api/v1/users/1`,
                headers: {
                    'X-CSRFToken': this.csrf_token
                },
                data: location
            }).then(response => {
                console.log(location)
            }).catch(error => {
                console.log(error.response.data)
            })
              
        },
    },
})

let vm = new Vue ({
    el: '#dashboard',
})

// methods: {
        //     getLocation: function () {
        //         axios({
        //             method: "get",
        //             url: "http://www.mapquestapi.com/geocoding/v1/address",
        //             params: {
        //                 key: "XrRARpiA1UUYmTV52MRug56U8Qjb5vyA",
        //                 location: this.userAddress, 
        //             },
        //         }).then(response => {
        //             this.locations = response.data.results[0].locations
        //             console.log(this.locations)
        //         })
        //     },
        //     
        //     }


        // },
