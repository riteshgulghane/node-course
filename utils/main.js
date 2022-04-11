// ----------- Wheather App ----------------

const geocode = require('./geocode');
const forecast = require('./forecast');


module.exports = getWheatherAt = async (address, callback) => {
    geocode(address, (err, data) => {
        if (err)
            return {
                error: "unable to fetch the data"
            }
        forecast(data.latitude, data.longitude, (error, data) => {
            if (error) {
                return {
                    'Error': error
                }
            } else {
                console.log('Data', data)
                callback(data);
            }
        })
    })
}