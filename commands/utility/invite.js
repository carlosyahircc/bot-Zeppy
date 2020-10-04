const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()
    const em = new MessageEmbed()
    .setTitle("Invitame a tu server")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
.setThumbnail(client.user.displayAvatarURL())
    .setDescription("[click aqui](https://discord.com/oauth2/authorize?client_id=725877650870239254&permissions=8537159744&scope=bot)")
    message.channel.send(em)



    message.channel.stopTyping()
}

module.exports.help = {
    name: "invite",
    aliases: ["invitacion"]
  }