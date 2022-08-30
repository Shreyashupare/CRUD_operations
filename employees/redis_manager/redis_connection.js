const { createClient } = require('redis');
const REDIS_PORT = require('../config/serverConfig.js');
const redis_client = createClient(REDIS_PORT);
redis_client.on('error', (err) => {
    console.log('Redis Client Error ', err)
});
redis_client.connect();

module.exports = redis_client