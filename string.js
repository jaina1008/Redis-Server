const client = require('./client')

async function init() {
    // Set message:6 value
    // await client.set('message:6', "Hey from Nodejs")

    // value available to us for 10 seconds as a way to invalidate cache.
    await client.expire("message:6", 10) 

    const result = await client.get('message:6')
    console.log("Result -> ", result)
}

init()