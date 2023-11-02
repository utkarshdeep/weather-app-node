const request = require('postman-request')


const forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=444751f42bb21eaceaeceef830a62941&query=${lat},${lon}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const current = body.current

            const { temperature, feelslike } = current

            callback(undefined, `${current.weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
        }



    })
}

module.exports = forecast

