const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const config = require("./config.json");

client.on("ready", ()=>console.log("READY"));
//load the transcript module
const transcript = require("./transcript")
transcript(client, "!transcript", 500)  
//transcript(client, "CMD", "MAXIMUM msgs") //minimum = 100 

client.login(config.TOKEN);
//Coded by Navaneeth K M