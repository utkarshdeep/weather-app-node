const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.tomtom.com/search/2/geocode/' + encodeURIComponent(address) + '.json?key=O6YsguCSwL7GGhP7othlLP9oLOJXQ7qc&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the geocoding service!', undefined)
        } else if (body.results.length === 0) {
            callback('Unable to find the location, please pass a valid location', undefined)
        } else {
            const { lat, lon } = body.results[0].position
            callback(undefined, {
                latitude: lat,
                longitude: lon,
                location: body.results[0].address.freeformAddress
            })
        }
    })
}

module.exports = geocode