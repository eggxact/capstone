Vue.component("calendar-date-indicator", {
    template: `
        <div class="calendat-date-indicator">{{ selectedMonth }}</div>
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
        <div id="calendar-date-selector">
            <span @click="selectPrevious"><</span>
            <span @click="selectCurrent">Today</span>
            <span @click="selectNext">></span>
        </div>
    `,
    props: {
        selectedDate: {
            type: Object,
            required: true
        }
    },
    computed: {
        selectedMonth: function () {
            return this.selectedDate.formate("MMMM YYYY")
        }
    }
})