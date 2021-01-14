Vue.component("get-places", {
    template: `
    <div id="get-places">
        <button type="submit" @click="showPlaces = !showPlaces">Places</button>
        <div v-show="showPlaces" id="places">
            <input @keydown.enter="getPlaces" v-model="searchterm" type="text" placeholder="Type here">
            <button type="submit" @click="getPlaces() ; show=!show">Search</button> 
            <label for="sort_by">Sort by:</label>
            <select v-model="sort_by" name="sort_by">
                <option value="best_match">best match</option>
                <option value="rating">rating</option>
                <option value="review_count">review count</option>
                <option value="distance">distance</option>
            </select>
            <div v-for="place in places" :key="place.index" v-show="show" id="places">
                <p>{{ place.name }} {{ place.rating }} {{ place.price }}</p>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            show: false,
            showPlaces: false,
            places: [],
            lat: '',
            lng: '',
            price: null,
            radius: null,
            rating: null,
            searchterm: '',
            sort_by: "best_match",
        }
    },
    created: function () {
        this.getUserPreferences()
    },
    computed: {
        strToInt: function () {
            this.radius = parseInt(this.radius)
            return this.radius
        }
    },
    methods: {
        getUserPreferences: function () {
            axios({
                method: 'get',
                url: `/api/v1/users/1/`,
            }).then( response => {
                this.lat = response.data.lat
                this.lng = response.data.lng
                this.radius = response.data.distance
                this.price = response.data.price
                this.rating = response.data.rating
            })
        },
        getPlaces: function () {
            this.getUserPreferences()
            axios({
                method: 'get',
                url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",
                headers: {
                    Authorization: "Bearer eVtmegeYiRYnDl2BqqK31pjTCr4NjXJpS-pqNuFvobocPBHYmivDyghMjZ2xJJncuyXf4KW9iY4efs53hlGeNgCqIOSZNnZqrrDNTtQv2juo_rPjNPTczpMDGozrX3Yx",
                },
                params: {
                    term: this.searchterm,
                    latitude: this.lat,
                    longitude: this.lng,
                    // radius: this.radius,
                    sort_by: this.sort_by,
                }
            }).then(response => {
                this.places = response.data.businesses
                console.log(this.places) 
            })
        }
    }
})
Vue.component("get-preferences", {
    template: `
    <div id="preferences">
        <button type="submit" @click="showPreferences = !showPreferences">Preferences</button>
        <div v-show="showPreferences" id="preferences">
            <button type="submit" @click="showPrice = !showPrice ; showRating = false ; showRange = false">$</button>
            <button type="submit" @click="showRating = !showRating ; showPrice = false ; showRange = false">&#9733;</button>
            <button type="submit" @click="showRange = !showRange ; showPrice = false ; showRating = false">mi.</button>
            <div v-show="showPrice" id="price">
                <input v-model="priceValue" type="radio" name="price" value="1">$</input><br>
                <input v-model="priceValue" type="radio" name="price" value="2">$$</input><br>
                <input v-model="priceValue" type="radio" name="price" value="3">$$$</input><br>
                <input v-model="priceValue" type="radio" name="price" value="4">$$$$</input><br>
            </div>
            <div v-show="showRating" id="rating">
                <input v-model="ratingValue" type="radio" name="rating" value="1">&#9734;</input><br>
                <input v-model="ratingValue" type="radio" name="rating" value="2">&#9734;&#9734;</input><br>
                <input v-model="ratingValue" type="radio" name="rating" value="3">&#9734;&#9734;&#9734;</input><br>
                <input v-model="ratingValue" type="radio" name="rating" value="4">&#9734;&#9734;&#9734;&#9734;</input><br>
                <input v-model="ratingValue" type="radio" name="rating" value="5">&#9734;&#9734;&#9734;&#9734;&#9734;</input><br>
            </div>
            <div v-show="showRange" id="distance">
                <input v-model.number="sliderValue" v-on:scroll.passive="slider" type="range" min="1" max="25" value="2.5">{{ sliderValue }}</input>                
            </div>
            <br>
            <button type="submit" @click="submitPreferences">submit changes</button>
        </div>
    </div>
    `,
    data: function () {
        return {
            showPreferences: false,
            showPrice: false,
            showRating: false,
            showRange: false,
            priceValue: null,
            ratingValue: null,
            sliderValue: null
        }
    },
    created: function () {
        axios({
            method: 'get',
            url: `/api/v1/users/1/`,
        }).then(response => {
            this.priceValue = response.data.price
            this.ratingValue = response.data.rating
            this.sliderValue = response.data.distance
        })
    },
    computed: {
        slider: function () {
            return this.sliderValue
        }
    },
    methods: {
        submitPreferences: function () {
            this.address = location.formatted_address
            axios({
                method: "patch",
                url: `/api/v1/users/1/`,
                headers: {
                    'X-CSRFToken': this.csrf_token
                },
                data: {
                    price: this.priceValue,
                    rating: this.ratingValue,
                    distance: this.sliderValue,
                },
            })  
        },
    },
    mounted: function() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
    },
})