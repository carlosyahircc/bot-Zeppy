const {  MessageEmbed } = require("discord.js");
const star = require('star-labs');

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()
    
    let user = message.mentions.users.first();
    
    
   
    if(!user){
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} C lame`)
      .setColor("RANDOM")
        .setImage(star.lick());
         
      message.channel.send(embed);
    } else {
      if(user.id === "725877650870239254") return message.channel.send("No quiero ...")
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username}  lame a ${user}`)
      .setColor("RANDOM")
        .setImage(star.lick());
         
      message.channel.send(embed);


    }




    message.channel.stopTyping()
}

module.exports.help = {
    name: "lick",
    aliases: []
  }