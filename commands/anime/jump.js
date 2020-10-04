const {  MessageEmbed } = require("discord.js");
const marsnpm = require("marsnpm");

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    
    let url = await marsnpm.jump(); 

    const embed = new MessageEmbed()
    .setDescription(`${message.author.username} se puso a ¿saltar?`)
    .setColor("RANDOM")
      .setImage(url);
       
    message.channel.send(embed);

    message.channel.stopTyping()
}

module.exports.help = {
    name: "jump",
    aliases: []
  }