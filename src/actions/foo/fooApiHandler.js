const getFoo = (event, context, callback) => {
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Hello ...',
        input: event
      })
    }
  
    callback(null, response)
}

const createFoo = (event, context, callback) => {
    const { body: { id, foo }} = event
    const response = {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Creating new entity ${foo} with id ${id}`,
        input: event
      })
    }
  
    callback(null, response)
}

module.exports = {
    get: getFoo,
    post: createFoo
}