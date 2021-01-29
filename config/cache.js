// const {
//     REDIS_PORT = 6379,
//     REDIS_HOST = 'localhost',
//     REDIS_PASSWORD = 'secret'

// } = process.env

const REDIS_OPTIONS = {
    port: 12011,// process.env.REDIS_PORT || 6379,
    host: 'redis-12011.c56.east-us.azure.cloud.redislabs.com', //process.env.REDIS_HOST || 'localhost',
    password: 'fcQfjTZUhCzwFg1WATNcmDoUXgAOasWe'//process.env.REDIS_PASSWORD || 'secret'
}


module.exports = REDIS_OPTIONS;