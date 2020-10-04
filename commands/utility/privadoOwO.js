const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if(message.author.id === "608452385936900106")
    {
        const embed = new MessageEmbed()
.setTitle("**servidores**")
.setDescription("```"+client.guilds.cache.map(r => r.name).join(",\n ")+"```")
.setFooter("Servers en total: "+client.guilds.cache.size)
.setTimestamp()
.setColor("RANDOM");
  
  message.channel.send(embed)
    } else {
      message.channel.send("No se que pensabas que saldria ._.")
    }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "patoganzo",
    aliases: []
  }