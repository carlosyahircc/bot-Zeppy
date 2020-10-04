const {  MessageEmbed } = require("discord.js");

const clien = require('nekos.life');
const {sfw} = new clien();
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let user = message.mentions.users.first();
    if(!user) return message.channel.send("menciona a alguien :(")
    if(message.author.id === user.id) return message.channel.send("No puedes acariciarte a ti mismo :(")
    if(user.id === "725877650870239254") return message.channel.send("Te voy a acusar con mi mama")


    
  let imagen = await sfw.pat().then(juas => {
        const embed = new MessageEmbed()
          .setDescription(`${message.author.username } le acaricia ${user} ;-;`)
          .setImage(juas.url)
          .setColor("RANDOM");
      
message.channel.send({embed});
      })

    message.channel.stopTyping()
}

module.exports.help = {
    name: "pat",
    aliases: []
  }