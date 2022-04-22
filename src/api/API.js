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
        return http.get(`forecast?q=${city}&lang=ru&units=metric&appid=471fb871540b1cabfd3ed0bce031cb0d`)
            .then(res => res.data.list)
    },

    forWeekGeo(lat, lon) {
        return http.get(`forecast?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=471fb871540b1cabfd3ed0bce031cb0d`)
            .then(res => res.data.list)
    }
}

