const {  MessageEmbed } = require("discord.js");

const marsnpm = require("marsnpm");

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()
    let user = message.mentions.users.first();
    if(!user) return message.channel.send("A quien quieres matar???")
          
    let url = await marsnpm.kill(); 
    if(user.id === "725877650870239254") return message.channel.send("No me puedes matar a mi ")

  
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} Mato a ${user}`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);



    message.channel.stopTyping()
}

module.exports.help = {
    name: "kill",
    aliases: []
  }