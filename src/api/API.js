import Axios from 'axios';

const http = Axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
})

export const weatherApi = {
    byCoord(lat, lon) {
        return http.get(`weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=471fb871540b1cabfd3ed0bce031cb0d`)
    },

    byCityName(city) {
        return http.get(`weather?q=${city}&units=metric&lang=ru&appid=471fb871540b1cabfd3ed0bce031cb0d`)
    },

    forWeek(city) {
        // forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27

        // const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27";
        return http.get(`forecast?q=${city}&lang=ru&units=metric&appid=471fb871540b1cabfd3ed0bce031cb0d`)
            .then(res => {
                console.log('res', res)
                // return res.data.list.filter(reading => reading.dt_txt.includes("09:00:00"))
                return res.data.list;

            })
    }
}

