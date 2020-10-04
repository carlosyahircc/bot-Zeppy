const {  MessageEmbed } = require("discord.js");
const marsnpm = require("marsnpm");

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let url = await marsnpm.kawaii(); 
   

    const embed = new MessageEmbed()
  .setColor("RANDOM")
    .setImage(url);
     
  message.channel.send(embed);



    message.channel.stopTyping()
}

module.exports.help = {
    name: "kawaii",
    aliases: []
  }