const {  MessageEmbed } = require("discord.js");

const marsnpm = require("marsnpm");
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let url = await marsnpm.fly(); 
      
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} Esta ¿Volando?`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);



    message.channel.stopTyping()
}

module.exports.help = {
    name: "fly",
    aliases: []
  }