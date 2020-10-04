const {  MessageEmbed } = require("discord.js");
const randomfact = require('anime-facts')


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    const fact = randomfact.facts()
    const embed = new MessageEmbed().setDescription(fact);
    message.channel.send(embed);



    message.channel.stopTyping()
}

module.exports.help = {
    name: "facts",
    aliases: []
  }