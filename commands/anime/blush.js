const {  MessageEmbed } = require("discord.js");
const client = require("tnai");
const tnai = new client();

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    let user = message.mentions.users.first();
    
    let url = await tnai.sfw.blush()
   
    if(!user){
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} C sonroja`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);
    } else {
      if(user.id === "725877650870239254") return message.channel.send("No quiero ...")
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username}  sonroja a ${user}`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);


    }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "blush",
    aliases: []
  }