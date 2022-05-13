const NodeCouchDb = require('node-couchdb');
const couch = new NodeCouchDb({
    host: '127.0.0.1',
    protocol: 'https',
    port: 5984
})

const create = async (request, response) => {
    try {
      console.log(body);
      const result = couch.insert("yellow_test", ...request.body)
      return response.resolve(result);
    } catch (err) {
      return Promise.resolve(err)
    }
  }

  const update = async (request, response) => {
    try {
      const result = couch.update("yellow_test", ...request.body)
      return response.resolve(result);
    } catch (err) {
      return Promise.resolve(false)
    }
  }

  module.exports = {
    create,
    update
  }