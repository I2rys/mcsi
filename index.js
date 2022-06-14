(async()=>{
    "use strict";

    // Dependencies
    const request = require("request-async")

    // Variables
    const args = process.argv.slice(2)

    // Main
    if(!args.length) return console.log("usage: node index.js <serverIP>")

    var response = await request(`https://api.mcsrvstat.us/2/${args[0]}`)
    response = JSON.parse(response.body)

    if(!response.online) return console.log("Unable to get the server information.")

    console.log(`
Server IP: ${args[0]}
Server Name: ${response.hostname}
Server Port: ${response.port}
Server Protocol: ${response.protocol}
Server Icon: ${response.icon}
Server Version: ${response.version}
Server Software: ${response.software}

Players Online: ${response.players.online}
Players Max: ${response.players.max}

Is Server Online: ${response.online}`)
    process.exit()
})()