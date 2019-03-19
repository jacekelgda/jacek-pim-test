const ServerlessInvoker = require('serverless-http-invoker')
const path = require('path')

describe('foo action',() => {
  let sls = new ServerlessInvoker(__dirname)

  test('it should be possible to GET foo', async () => {
    let { statusCode } = await sls.invoke('GET api/foo')

    expect(statusCode).toBe(200)
  })

  test('it should be possible to POST foo with data', async () => {
    const body = {
      id: 'xxx',
      foo: 'bar'
    }
    let { body: { message }, statusCode } = await sls.invoke('POST api/foo', { body })

    expect(statusCode).toBe(201)
    expect(message).toBe('Creating new entity bar with id xxx')
  })
})
