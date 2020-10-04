const {  MessageEmbed } = require("discord.js");
const Discord = require("discord.js")


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    try{
    const regex = /<[?a?:]*[^:\s]*:*(\d{17,19})*>/g
    const searchID = /:(\d{17,19})>/g;
    const searchName = /:[^:\s]*:/
    const emoji = message.content.match(regex)
    const find = emoji ? emoji[0].match(searchID) : message.channel.send(`uso: \`z/emoji [emote]\``) 
    if (!emoji) return;
    const nameFind = emoji[0].match(searchName)
    const name = nameFind[0].substr(1, nameFind[0].length - 2)
    const gif = emoji[0].includes("<a:")
    const id = find[0].substr(1, find[0].length-2) 
    console.log(emoji)
     const atta = new Discord.MessageAttachment(
          `https://cdn.discordapp.com/emojis/${id}.${gif ? "gif" : "png"}`,
          `${name}.${gif ? "gif" : "png"}`
        );
        return message.channel.send(atta);
} catch (err){
    message.channel.send(":x: **Hubo un error** (`No se puede obtener emojis de discord`)")
    message.channel.stopTyping()
}

    
  
   message.channel.stopTyping()
}

module.exports.help = {
    name: "emoji",
    aliases: ["jumbo"]
  }