const request = require('request');

const geocode = (address, callback) => {
    const mapbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoicml0ZXNoZ3VsZ2hhbmUiLCJhIjoiY2wxb3p1Z2VyMHB1cjNwbW9iMGk3NHo5ZSJ9.ik7AHJvOD6G_Z_uhL2Foaw&limit=1'

    request({
        url: mapbox_url,
        json: true
    }, (err, response) => {
        if (err) {
            callback("unable to request! ", undefined);
        } else if (response.body.error) {
            callback("something went wrong! ", undefined);
        } else {
            callback(undefined, {
                "latitude": response.body.features[0].center[0],
                "longitude": response.body.features[0].center[1]
            });
        }
    })
}

module.exports = geocode;