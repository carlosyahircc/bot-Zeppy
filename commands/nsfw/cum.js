const {  MessageEmbed } = require("discord.js");

const clien = require('nekos.life');
const {nsfw} = new clien();
const akaneko = require("akaneko")
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    if (message.channel.nsfw === true) {
        let user = message.mentions.users.first()
        
        if(user) {
                       if(user.id === "725877650870239254"){
       return  message.channel.send("Estas loco")
    }
            let aut = message.author.username
            let imagen = await nsfw.cumsluts().then(juas => {
                const embed = new MessageEmbed()
                  .setDescription(`${aut} se vino en ${user}`)
                  .setImage(juas.url)
                  .setColor("RANDOM");
              
        message.channel.send({embed});
            })


        } else {
        message.delete()

const akanekoSan = new MessageEmbed();
akanekoSan.setImage(akaneko.nsfw.cum());
return message.channel.send(akanekoSan);
        }

    } else {
        message.channel.send("Este canal no es nsfw")
    }

    message.channel.stopTyping()
}

module.exports.help = {
    name: "cum",
    aliases: []
  }