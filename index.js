// ----------- Wheather App ----------------

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('New York', (err, data) => {
    console.log('data - ', data);
    forecast(data.latitude, data.longitude, (error, data) => {
        if (error) {
            console.log('Error', error);
        } else {
            console.log('Data', data)
        }
    })
})

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

