const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    let permsBot = message.guild.me.hasPermission("MANAGE_CHANNELS") 

    if (!permsBot) return message.channel.send("X | No tengo permisos")
    if(!message.member.hasPermission("MANAGE_CHANNELS")) { 
        return message.channel.send(" No tienes los permiso perdon :(") 
    }
      
            let channel = message.mentions.channels.first()
            if(channel) {
    
channel.updateOverwrite(channel.guild.roles.everyone,  { // Pass 'UserResolvable' type thing as described in Wiki!
VIEW_CHANNEL: true,
SEND_MESSAGES: true,
READ_MESSAGE_HISTORY: true,
ATTACH_FILES: true
});
message.channel.send("Canal desbloqueado OmO :unlock:")

    
            } else {
            let channel1 = message.channel
            channel1.updateOverwrite(channel1.guild.roles.everyone,  { // Pass 'UserResolvable' type thing as described in Wiki!
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              READ_MESSAGE_HISTORY: true,
              ATTACH_FILES: true
            });
              message.channel.send("Canal desbloqueado OmO :unlock:")
            
            }

    message.channel.stopTyping()
}

module.exports.help = {
    name: "unlock",
    aliases: []
  }