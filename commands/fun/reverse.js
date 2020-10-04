const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()



    if(!args[0]) return message.channel.send("Eeeeeh. te equivaste unu asi se usa /reverse (mensaje)")
    try{
    const reverse = args.join(" ").split("").reverse().join("");
        message.channel.send(reverse)
    } catch (error) {
        message.channel.send("A ocurrido un error" + error)
    }
    message.channel.stopTyping()
}

module.exports.help = {
    name: "reverse",
    aliases: []
  }