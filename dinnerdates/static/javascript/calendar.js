Vue.component("calendar-app", {
    template: `
    <div id="macro-calendar">
        <h2>January</h2>
        <button type="submit" @click="getRestaurants">Schedule dinner</button>
        <div id="calendar">
            <div v-for="day in month" :key="day.index" id="calendar-day">
                {{ day.day }}
            </div>
        </div>    
    </div>
    `,
    data: function () {
        return {
            month: [
            {day: 27}, {day: 28}, {day: 29}, {day: 30}, {day: 31}, {day: 1}, {day: 2}, 
            {day: 3}, {day: 4}, {day: 5}, {day: 6}, {day: 7}, {day: 8}, {day: 9},
            {day: 10}, {day: 11}, {day: 12}, {day: 13}, {day: 14}, {day: 15}, {day: 16},
            {day: 17}, {day: 18}, {day: 19}, {day: 20}, {day: 21}, {day: 22}, {day: 23},
            {day: 24}, {day: 25}, {day: 26}, {day: 27}, {day: 28}, {day: 29}, {day: 30},
            {day: 31}, {day: 1}, {day: 2}, {day: 3}, {day: 4}, {day: 5}, {day: 6}
            ],
            restaurants: [],
            dinnerSchedule: {},
        }
    },
    props: ['current-user'],
    computed: {
        // postToCalendar: function () {
        //     for (let i=0; i<this.month.length; i++) {
        //         if ()
        //     }
        // }
    },
    methods: {
        getRestaurants: function () {
            axios({
                method: 'get',
                url: `/api/v1/restaurants/`,
            }).then(response => {
                // console.log(response)
                this.restaurants = [] 
                for (let i=0; i<response.data.length; i++) {
                    if (response.data[i].user === this.currentUser.id) {
                        this.restaurants.push(response.data[i]) 
                    }
                }
                // console.log(this.restaurants, 'this is restaurants',)
                this.postRestaurants()
            })
        },
        postRestaurants: function () {
            this.dinnerSchedule = {}
            let nums = []
            for (let i=0; i<parseInt(this.currentUser.frequency); i++) {
                let num = Math.floor((Math.random() * 30))
                while (true) {
                    if (nums.includes(num)) {
                        num = Math.floor((Math.random() * 30))
                    }
                    else {
                        nums.push(num)
                    } 
                    break
                }
            }
            for (let i=0; i<this.currentUser.frequency; i++) {
                console.log(i, nums[i], this.restaurants[nums[i]])
                this.dinnerSchedule[i] = this.restaurants[nums[i]]
            }
            console.log(this.dinnerSchedule) 
        }
    }
})