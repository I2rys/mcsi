//Dependencies
const Request = require("request")
const Chalk = require("chalk")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(Self_Args.length == 0){
    console.log(`node index.js <mcserver_ip>
Example: node index.js play.jartexnetwork.com`)
    process.exit()
}

Request(`https://api.mcsrvstat.us/2/${Self_Args[0]}`, function(err, res, body){
    if(err){
        console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} Something went wrong while requesting to the API, please try again later.`)
        process.exit()
    }
    
    body = JSON.parse(body)

    if(body.hostname == undefined){
        console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} Unable to get the server information.`)
        process.exit()
    }

    console.log(Chalk.greenBright(`Server IP: ${Self_Args[0]}
Server Name: ${body.hostname}
Server Port: ${body.port}
Server Protocol: ${body.protocol}
Server Icon: ${body.icon}
Server Version: ${body.version}
Server hoster: ${body.software}

Players Online: ${body.players.online}
Players Max: ${body.players.max}

Is Server Online: ${body.online}`))
    process.exit()
})
