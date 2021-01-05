Vue.component("user-info", {
    template: `
        <div id="user-address">
            <input type="text" v-model="street" placeholder="Street Address">
            <input type="text" v-model="city" placeholder="City">
            <input type="text" v-model="state" placeholder="State">
            <input type="text" v-model="zipcode" placeholder="Zip Code">
            <button type="submit" @click="addAddress">Submit</button><br>
            <button @click="getPlaces" type="submit">Find places</button>
        </div>
    `,
    data: function () {
        return {
            street: '',
            city: '',
            state: '',
            zipcode: '',
            places: {},
        }
    },
    computed: {
        userAddress: function () {
            return `${this.street}, ${this.city}, ${this.state} ${this.zipcode}`
        }
    },
    methods: {
        getPlaces: function () {
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
                this.places = response.data
                console.log(this.places)
            })
        }
    },
})

Vue.component("get-places", {

    
})
let vm = new Vue ({
    el: '#dashboard',
    // created: function () {
    //     this.loadPreferences()
    // }
})