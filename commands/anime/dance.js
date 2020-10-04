const {  MessageEmbed } = require("discord.js");

const marsnpm = require("marsnpm");
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    let user = message.mentions.users.first();
    
    let url = await marsnpm.dance(); 
    if(!user){

    const embed = new MessageEmbed()
    .setDescription(`${message.author.username} se puso a bailar`)
    .setColor("RANDOM")
      .setImage(url);
       
    message.channel.send(embed);
    } else {
      if(user.id === "725877650870239254") return message.channel.send("No quiero ...")
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} se puso a bailar con ${user}`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);


    }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "dance",
    aliases: []
  }