const {  MessageEmbed } = require("discord.js");

const marsnpm = require("marsnpm");
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let user = message.mentions.users.first()
    if(!user){
    let img = await marsnpm.sniper(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
message.channel.send({files: [img]})

    } else {
        let img = await marsnpm.sniper(user.displayAvatarURL({ dynamic: false, format: 'png' }))
message.channel.send({files: [img]})


    }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "snipe",
    aliases: []
  }