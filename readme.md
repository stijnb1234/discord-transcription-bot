## Discord-Transcript

An advanced Transcript Bot, which allows you to transcript almost Infinite messages of a channel, and get them into a readable word (docx) File!

## Installation | How to use the Bot

 **1.** Install [node.js v12](https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode) or higher

 **2.** Download this repo and unzip it    |    or git clone it
 
 **3.** Install all of the packages with **`npm install`**     |  the packages are   **`npm install node.js discord.js officegen fs`**
 
 **4.** start the bot with **`node index.js`**

## Usage - index.js

```javascript
const Discord = require("discord.js");         //load the Discord.js Library
const client = new Discord.Client();           //make a new Client
const config = require("./config.json");       //load in all of the config files
client.on("ready", ()=>console.log("READY"));  //log when the bot gets ready
const transcript = require("./transcript");    //load the transcript.js file
transcript(client, "!transcript", 500);        //call the transcript file with the client, the COMMAND, and the maximum of messages to fetch 
client.login(config.TOKEN);                    //start the bot with the bot token
```

## **NOTE:**

*If you are having errors/problems with starting delete the package.json file and do, before you install the packages `npm init`*

## SUPPORT ME

<div align="center">
            <a href="https://www.buymeacoffee.com/navaneethkm" target="_blank" style="display: inline-block;">
                <img
                    src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-orange.svg?style=flat-square" 
                    align="center"
                />
            </a></div>
            
## Credit

[@Tomato6966](https://github.com/Tomato6966/) For the great bot!!
