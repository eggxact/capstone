Vue.component("calendar-app", {
    template: `
    <div id="macro-calendar">
        <div id="month-title">
            <h2>January 2021</h2>
        </div>
        <div id="schedule-dinner">
            <button type="submit" @click="getRestaurants() ; showCalendar = true ; showHide = true">Schedule dinner</button>
        </div>
        <div id="show-cal-btns">
            <button v-show="showHide" type="submit" @click="showCalendar = false ; showShow = true ; showHide = false">Hide Calendar</button>
            <button v-show="showShow" type="submit" @click="showCalendar = true ; showHide = true ; showShow = false">Show Calendar</button>
        </div>
        <div v-show="showCalendar" id="calendar">
            <div v-for="day in month" :key="day.index" id="day-container-container">
                <div id="day-container">
                    <div>
                        <div id="restaurant-text">
                            <p>{{ day.day }}</p>
                        </div>
                        <a id="day-container-a" :href="day.restaurant_url" target="_blank">
                            <div id='circle-container'>
                                <p id="restaurant-name">{{ day.restaurant_name }}</p>
                                <div v-if="day.image_url !== ''" id="calendar-day">
                                    <img  :src="day.image_url">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                </span>
            </div>
        </div>  
    </div>
    `,
    data: function () {
        return {
            showCalendar: false,
            showHide: false,
            showShow: false,
            month: [
            {details: {}, image_url: '', restaurant_url: '', month: 12, day: 27, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 12, day: 28, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 12, day: 29, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 12, day: 30, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 12, day: 31, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 1, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 2, restaurant_name: ''}, 
            {details: {}, image_url: '', restaurant_url: '', month: 1, day: 3, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 4, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 5, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 6, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 7, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 8, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 9, restaurant_name: ''},
            {details: {}, image_url: '', restaurant_url: '', month: 1, day: 10, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 11, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 12, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 13, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 14, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 15, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 16, restaurant_name: ''},
            {details: {}, image_url: '', restaurant_url: '', month: 1, day: 17, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 18, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 19, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 20, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 21, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 22, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 23, restaurant_name: ''},
            {details: {}, image_url: '', restaurant_url: '', month: 1, day: 24, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 25, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 26, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 27, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 28, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 29, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 1, day: 30, restaurant_name: ''},
            {details: {}, image_url: '', restaurant_url: '', month: 1, day: 31, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 2, day: 1, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 2, day: 2, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 2, day: 3, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 2, day: 4, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 2, day: 5, restaurant_name: ''}, {details: {}, image_url: '', restaurant_url: '', month: 2, day: 6, restaurant_name: ''}
            ],
            restaurants: [],
            restaurant_index: [],
        }
    },
    props: ['current-user'],
    methods: {
        getRestaurants: function () {
            axios({
                method: 'get',
                url: `/api/v1/restaurants/`,
            }).then(response => {
                // console.log(response)
                this.restaurants = [] 
                for (let i=0; i<(response.data.length); i++) {
                    if (response.data[i].user === this.currentUser.id) {
                        this.restaurants.push(response.data[i]) 
                    }
                }
                console.log(this.restaurants, 'this is restaurants',)
                this.getRandomRestaurants()
                this.postRestaurants()
            })
        },
        getRandomRestaurants: function () {
            this.restaurant_index = []
            for (let i=0; i<this.currentUser.frequency; i++) {
                let num = Math.floor((Math.random() * (this.restaurants.length -1)))
                while (true) {
                    if (this.restaurant_index.includes(num)) {
                        num = Math.floor((Math.random() * (this.restaurants.length -1)))
                    }
                    else {
                        this.restaurant_index.push(num)
                        break
                    } 
            }}
        },
        postRestaurants: function () {
            let nums = []
            for (let i=0; i<(this.currentUser.frequency); i++) {
                let num = Math.floor((Math.random() * 30))
                while (true) {
                    if (nums.includes(num)) {
                        num = Math.floor((Math.random() * 30))
                    }
                    else {
                        nums.push(num)
                        break
                    }
                }
                for (let y=0; y<(this.month.length); y++) {
                    if (this.month[y].day === num && this.month[y].month === 1) {
                        this.month[y].restaurant_name = this.restaurants[this.restaurant_index[i]].restaurant
                        this.month[y].restaurant_url = this.restaurants[this.restaurant_index[i]].restaurant_url
                        this.month[y].image_url = this.restaurants[this.restaurant_index[i]].image_url
                        console.log(this.month[y])
                    }
                } 
            }
            console.log(this.restaurants, 'this is restaurants again')
        },
    }
})

