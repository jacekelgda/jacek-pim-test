const ServerlessInvoker = require('serverless-http-invoker')
const path = require('path')
const axios = require('axios')
const sls = new ServerlessInvoker(__dirname)

jest.mock('axios')

describe('foo action', () => {
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

describe('deps action', () => {
  test('mocking axios', async () => {
    axios.get.mockResolvedValue({ externalString: 'Hello from mock'})
    let { body: { message }, statusCode } = await sls.invoke('GET api/deps')
    
    expect(statusCode).toBe(200)
    expect(message).toBe('I got data from external api: Hello from mock')
  })
})
