const axios = require('axios')

const getDeps = (event, context, callback) => {
    axios
        .get('/users.json')
        .then(({ externalString }) => {
            const response = {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: `I got data from external api: ${externalString}`,
                    input: event
                })
            }
            
            callback(null, response)
        })
        .catch( e => {
            console.log('Exception has occured', e)
        })
}

module.exports = {
    get: getDeps
}