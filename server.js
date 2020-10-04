const discord = require("discord.js")
const client = new discord.Client()
const fs = require("fs")
client.config = require("./config.json")

let modules = ["utility", "moderacion", "fun", "anime", "imagenes", "nsfw"]; 
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

modules.forEach(module => {
fs.readdir(`./commands/${module}/`, (err, files) => {
  if(err) console.log(err)
files.forEach(f => {
  if(!f.endsWith(".js")) return;
if(f.length <= 0) return console.log(" no hay nada")
let contador = 0
console.log(contador++ , "-Cargando comandos OwO: " + f)
let command = require(`./commands/${module}/${f}`)
client.commands.set(command.help.name, command)
command.help.aliases.forEach(alias => {
client.aliases.set(alias, command.help.name)
})
})
})
})

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`eventos UwU: ${file}`);
       return client.on(eventName, event.bind(null, client));
    });
});



client.login(client.config.token)