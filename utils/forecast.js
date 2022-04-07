const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e37ab5c20e2de62aea33fa6cd5c17b54&query=37.467838,-12.463788';

    request({
        url: url,
        json: true
    }, (err, response) => {
        if (err) {
            callback("unable to request! ", undefined);
        } else if (response.body.error) {
            callback("something went wrong! ", undefined);
        } else {
            callback(undefined, 
                    {
                    "weather_descriptions": response.body.current.weather_descriptions[0],
                    "feelslike": response.body.current.feelslike
                }
            );
        }
    })
}

module.exports = forecast;