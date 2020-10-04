const {  MessageEmbed } = require("discord.js");

const marsnpm = require("marsnpm");
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    let url = await marsnpm.fbi(); 
   
        const embed = new MessageEmbed()
        .setTitle(`Ya viene la onu Corraaan`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);

    message.channel.stopTyping()
}

module.exports.help = {
    name: "onu",
    aliases: []
  }