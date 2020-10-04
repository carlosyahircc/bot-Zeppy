const marsnpm = require("marsnpm");
const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    try{
  
    let url = await marsnpm.angry(); 
    } catch (error) {
      message.channel.stopTyping()
      message.channel.send("se produjo un error:" + error)

    }
    let user = message.mentions.users.first();
    let url = await marsnpm.angry(); 
   
    if(!user){
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} Se enojo/a`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);
    } else {
      if(user.id === "725877650870239254") return message.channel.send("No quiero ...")
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} Se enojo/a con ${user}`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);


    }



    message.channel.stopTyping()
}

module.exports.help = {
    name: "angry",
    aliases: []
  }