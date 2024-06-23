const client = require('./client');

async function init(){
    //await client.set('message:6','hey from node js')
    await client.expire('message:6',20);//expire this key value after 20secs
    const result = await client.get("message:6");
    console.log('Result -> ', result);
}

init();