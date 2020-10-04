const Discord = require("discord.js");
const Swiftcord = require("swiftcord");
const canva = new Swiftcord.Canvas();

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let user = message.mentions.users.first()
    if(!user){
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canva.dither(avatar);
        let attachment = new Discord.MessageAttachment(image, "deleted.png");
        return message.channel.send(attachment);
    } else {
      let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let image = await canva.dither(avatar);
      let attachment = new Discord.MessageAttachment(image, "deleted.png");
      return message.channel.send(attachment);

    }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "dither",
    aliases: []
  }