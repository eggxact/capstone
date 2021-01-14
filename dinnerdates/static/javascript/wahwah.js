Vue.component("calendar-date-indicator", {
    template: `
        <div class="calendar-date-indicator">{{ selectedMonth }}</div>
    `,
    props: {
        selectedDate: {
            type: Object,
            required: true
        }
    },
    computed: {
        selectedMonth: function () {
            return this.selectedDate.format("MMMM YYYY")
        }
    }
})
Vue.component("calendar-date-selector", {
    template: `
        <div class="calendar-date-selector">
            <span @click="selectPrevious"><</span>
            <span @click="selectCurrent">Today</span>
            <span @click="selectNext">></span>
        </div>
    `,
    props: {
        currentDate: {
            type: String,
            required: true,
        },
        selectedDate: {
            type: Object,
            required: true
        }
    },
    methods: {
        selectPrevious: function () {
            let newSelectedDate = dayjs(this.selectedDate).subtract(1, "month")
            this.$emit("dateSelected", newSelectedDate) 
        },
        selectCurrent: function () {
            let newSelectedDate = dayjs(this.currentDate)
            this.$emit("dateSelected", newSelectedDate) 
        },
        selectNext: function () {
            let newSelectedDate = dayjs(this.selectedDate).add(1, "month") 
            this.$emit("dateSelected", newSelectedDate) 
        }
    }
})
Vue.component("calendar-weekdays", {
    template: `
        <ol class="day-of-week">
            <li v-for="weekday in weekdays" :key="weekday">
                {{ weekday }}
            </li>
        </ol>
    `,
    computed: {
        weekdays: function () {
            const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            return WEEKDAYS 
        }
    }
})
Vue.component("calendar-month-day-item", {
    template: `
        <li class="calendar-day"
            :class="{
                'calendar-day--not-current': !isCurrentMonth,
                'calendar-day--today': isToday
            }">
            <span>{{ label }}</span>
        </li>
    `,
    props: {
        day: {
            type: Object,
            required: true
        },
        isCurrentMonth: {
            type: Boolean,
            default: false
        },
        isToday: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        label: function () {
            return dayjs(this.day.date).format("D")
        }
    }
})
Vue.component("calendar-month", {
    template: `
    <div class="calendar-month">
        <div class="calendar-month-header">
            <calendar-date-indicator :selected-date="selectedDate" class="calendar-month-header-selected-month"></calendar-date-indicator>
            <calendar-date-selector :current-date="today" :selected-date="selectedDate" @dateSelected="selectDate"></calendar-date-selector> 
        </div>
        <calendar-weekdays></calendar-weekdays>
        <ol class="days-grid">
            <calendar-month-day-item 
                v-for="day in days" 
                :key="day.date" 
                :day="day" 
                :is-today="day.date === today">
            </calendar-month-day-item>
        </ol> 
    </div>
    `,
    data: function () {
        return {
            selectedDate: dayjs(),
            today: dayjs().format("YYYY-MM-DD")
        }
    },

    methods: {
        selectDate: function (newSelectedDate) {
            this.selectedDate = newSelectedDate 
        },
        getWeekday(date) {
            return dayjs(date).weekday()
        }
    },
    computed: {
        days: function () {
            return [
                // ...this.previousMonthDays,
                ...this.currentMonthDays,
                // ...this.nextMonthDays
            ]
        },
        numberOfDaysInMonth: function () {
            return dayjs(this.selectedDate).daysInMonth() 
        },
        currentMonthDays: function () {
            return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
                return {
                    date: dayjs(`${this.year}-${this.month}-${index + 1}`).format("YYYY-MM-DD"),
                    isCurrentMonth: true 
                }
            })
        },
        // previousMonthDays: function () {
        //     const firstDayOfTheMonthWeekday = this.getWeekday(this.currentMonthDays[0].date)
        //     const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(1, "month")
        //     const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday ? firstDayOfTheMonthWeekday - 1 : 6
        //     const previousMonthLastMondayDayOfMonth = dayjs(this.currentMonthDays[0].date).subtract(visibleNumberOfDaysFromPreviousMonth, "day").date()

        //     return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
        //         return {
        //             date: dayjs(`${previousMonth.year()}-${previousMonth.month() + 1}-${previousMonthLastMondayDayOfMonth + index}`).format("YYYY-MM-DD"),
        //             isCurrentMonth: false
                
        //         }
        //     })
        // },
        // nextMonthDays: function () {
        //     console.log(this.year, this.month, this.currentMonthDays)
        //     const lastDayOfTheMonthWeekday = this.getWeekday(`${this.year}-${this.month}-${this.currentMonthDays.length}`)
        //     const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month")
        //     const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday ? 7 - lastDayOfTheMonthWeekday : lastDayOfTheMonthWeekday
        //     console.log(lastDayOfTheMonthWeekday)
        //     return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        //         return {
        //             date: dayjs(`${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`).format("YYYY-MM-DD"),
        //             isCurrentMonth: false
        //         }
        //     })
        // }
    },
})