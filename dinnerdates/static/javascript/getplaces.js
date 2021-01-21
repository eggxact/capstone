Vue.component("get-places", {
    template: `
    <div id="get-places">
        <div id="restaurant-btn">
            <button class="user-btn" type="submit" @click="showPlaceSearch = !showPlaceSearch">Restaurants</button>
        </div>
        <div v-show="showPlaceSearch" id="places">
            <div id="search-rest-btn">
                <button type="submit" @click="places = [] ; getPlaces() ; showPlaces = true ; showButtons = true ; showHide = true ; showShow = false">Search</button> 
                <div>
                    <label for="sort_by">Sort by:</label>
                    <select v-model="sort_by" name="sort_by">
                        <option value="best_match">best match</option>
                        <option value="rating">rating</option>
                        <option value="review_count">review count</option>
                        <option value="distance">distance</option>
                    </select>
                </div>
            </div>
            <div v-show="showButtons">
                <button v-show="showHide" @click="showPlaces = !showPlaces ; showShow = !showShow ; showHide = !showHide" type="submit" id="hide-places">hide places</button>
                <button v-show="showShow" @click="showPlaces = !showPlaces ; showShow = !showShow ; showHide = !showHide" type="submit" id="hide-places">show places</button>
            </div>
            <div v-show="showPlaces" id="places">
                <div v-for="place in userPlaces" :key="place.id">
                    <a target="_blank" :href=" place.url "><p>{{ place.name }}</p></a>
                    <p>{{ place.rating }} {{ place.price }}</p>
                </div>
                <button type="submit" @click="submitPlaces">Submit your restaurants</button>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            showButtons: false,
            showHide: true,
            showShow: false,
            showPlaces: false,
            showPlaceSearch: false,
            places: [],
            restData: [],
            userPlaces: [],
            sort_by: "best_match",
        }
    },
    props: ['current-user'],
    computed: {
        strToInt: function () {
            return parseInt(this.currentUser.distance * 1600) 
        },
    },
    methods: {
        getPlaces: function () {
            axios({
                method: 'get',
                url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",
                headers: {
                    Authorization: "Bearer eVtmegeYiRYnDl2BqqK31pjTCr4NjXJpS-pqNuFvobocPBHYmivDyghMjZ2xJJncuyXf4KW9iY4efs53hlGeNgCqIOSZNnZqrrDNTtQv2juo_rPjNPTczpMDGozrX3Yx",
                },
                params: {
                    latitude: this.currentUser.lat,
                    longitude: this.currentUser.lng,
                    radius: this.strToInt,
                    categories: this.currentUser.categories,
                    limit: 50,
                    offset: 50
                }
            }).then(response => {
                this.places = response.data.businesses
                this.sortPlaces()
            })
        },
        sortPlaces: function () {
            this.userPlaces = []
            let nums = []
            for (let i=0; i<parseInt(this.currentUser.frequency); i++) {
                let num = Math.floor((Math.random() * (this.places.length - 1)))
                while (true) {
                    if (nums.includes(num)) {
                        num = Math.floor((Math.random() * (this.places.length - 1)))
                    }
                    else {
                        nums.push(num)
                    } 
                    break
                }
            }
            for (let i=0; i<nums.length; i++) {
                let place = this.places[nums[i]] 
                this.userPlaces.push(place)
            }  
            console.log(this.userPlaces)
        },
        submitPlaces: function () {
            // this.restData = []
            for (let i=0; i<this.userPlaces.length; i++) {
                axios({
                    method: 'post',
                    url: `/api/v1/restaurants/`,
                    headers: {
                        'X-CSRFToken': this.csrf_token
                    },
                    data: {
                        user: this.currentUser.id,
                        restaurant: this.userPlaces[i].name,
                        restaurant_id: this.userPlaces[i].id,
                        image_url: this.userPlaces[i].image_url,
                        restaurant_url: this.userPlaces[i].url
                    },
                }) 
            }
        },
    },
    mounted: function() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value
    },

})