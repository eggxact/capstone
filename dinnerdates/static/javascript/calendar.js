Vue.component("calendar-app", {
    template: `
    <div id="calendar">
        <div v-for="day in month" :key="day.index" id="calendar-day">{{ day }}</div>
    </div>    
    `,
    data: function () {
        return {
         month: [27,28,29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4,5,6]
        }
    },
    created: function () {
            return this.month
    },
})