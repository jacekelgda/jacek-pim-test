const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const { expect } = chai
const ServerlessInvoker = require('serverless-http-invoker')
const path = require('path')

describe('foo action',() => {
  let sls = new ServerlessInvoker(__dirname)

  it('it should be possible to GET foo', () => {
    let response = sls.invoke('GET api/foo')

    return expect(response).to.eventually.have.property('statusCode', 200)
  })

  it('it should be possible to POST foo', () => {
    const body = {
      id: 'xyz123',
      foo: 'bar'
    }
    let response = sls.invoke('POST api/foo', { body })

    return expect(response).to.eventually.have.property('statusCode', 201)
  })

  it('should return proper response on POST api/foo', () => {
    const body = {
      id: 'xyz123',
      foo: 'bar'
    }
    let response = sls.invoke('POST api/foo', { body })

    result = expect(response).to.eventually.have.deep.nested
      .property('body.message', 'Creating new entity bar with id xyz123')
  })
})
