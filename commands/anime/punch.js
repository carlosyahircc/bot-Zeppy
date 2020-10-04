const {  MessageEmbed } = require("discord.js");
const marsnpm = require("marsnpm");

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let user = message.mentions.users.first();
    let url = await marsnpm.punch(); 
   
    if(!user){
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} c golpea`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);
    } else {
      if(user.id === "725877650870239254") return message.channel.send(";-;")
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} lo golpea  ${user}`)
        .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);


    }



    message.channel.stopTyping()
}

module.exports.help = {
    name: "punch",
    aliases: []
  }