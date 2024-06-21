const client = require('./client')

async function init() {
    await client.set('mess:6', "Hey from Nodejs")
    const result = await client.get('mess:6')
    console.log("Result -> ", result)
}

init()