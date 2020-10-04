const {  MessageEmbed } = require("discord.js");

const clien = require("tnai");
const tnai = new clien();
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    let user = message.mentions.users.first();
    
    let url = await tnai.sfw.greeting()
   
    if(!user){
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} Los saluda`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);
    } else {
      if(user.id === "725877650870239254") return message.channel.send("No quiero ...")
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} Saluda a ${user}`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);


    }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "hi",
    aliases: []
  }