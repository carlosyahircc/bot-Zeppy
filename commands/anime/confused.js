const marsnpm = require("marsnpm");
const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let user = message.mentions.users.first();
    
    let url = await marsnpm.confused(); 
   
    if(!user){
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} c confunde`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);
    } else {
      if(user.id === "725877650870239254") return message.channel.send("No quiero ...")
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} se confunde con ${user}`)
        .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);


    }




    message.channel.stopTyping()
}

module.exports.help = {
    name: "confused",
    aliases: []
  }