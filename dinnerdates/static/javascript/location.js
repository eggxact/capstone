Vue.component("user-location", {
    template: `
    <div id="user-address">
        <button class="user-btn" type="submit" @click="showAddress = !showAddress ; showUpdate = true">address</button>
        <div v-show="showAddress">
            <p>{{ currentUser.address }}</p>
            <div id="address-update-button" >
                <button v-show="showUpdate" type="submit" @click="showInputs = true ; showUpdate = false">add address</button>
            </div>
            <div v-show="showInputs">
    
                <input @keydown.enter="getLocation" class="address-input" v-model="street" type="text" placeholder="enter your address"><br>
                <br>
                <div id="address-submit">
                    <button @click="getLocation" type="submit">update address</button>
                    <button @click="showInputs = false ; showUpdate = true " type="submit">cancel</button>
                </div>
                <div v-for="location in locations" :key=location.id id="address-verification">
                    <p>{{ location.formatted_address }}</p>
                    <button type="submit" @click="submitLocation(location); showInputs = false ; showUpdate = true ">this is my address</button>
                </div>
            </div>
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
            showInputs: false,
            showAddress: null,
            showCancel: null,
            showUpdate: null,
        }
    },
    props: ['current-user'],
    computed: {
        userAddress: function () {
            return `${this.street}, ${this.city}, ${this.state} ${this.zipcode}`
        },
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
            }).then(response => {
                this.locations = response.data.candidates
            })
        },
        submitLocation: function (location) {
            this.currentUser.address = location.formatted_address
            axios({
                method: "patch",
                url: `/api/v1/users/${this.currentUser.id}/`,
                headers: {
                    'X-CSRFToken': this.csrf_token
                },
                data: {
                    address: location.formatted_address,
                    lat: location.geometry.location.lat,
                    lng: location.geometry.location.lng,
                },
            }).then(response => {
                console.log(this.currentUser.address)
            }) 
        },
    },
    mounted: function() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
    },
})