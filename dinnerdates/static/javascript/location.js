Vue.component("user-location", {
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
            csrf_token: '', 
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
                url:  "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
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
            console.log(location.formatted_address) 
            console.log(location.geometry.location.lat) 
            console.log(location.geometry.location.lng) 
            axios({
                method: "patch",
                url: `/api/v1/users/1/`,
                headers: {
                    'X-CSRFToken': this.csrf_token
                },
                data: {
                    address: location.formatted_address,
                    lat: location.geometry.location.lat,
                    lng: location.geometry.location.lng,
                },
            }).then(response => {
                console.log(location)
            }).catch(error => {
                console.log(error.response.data)
            })
              
        },
    },
    mounted: function() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
    },
})