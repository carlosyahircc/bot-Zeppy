const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    
    if(!args[0]) {
        const reportError = new MessageEmbed()
        .setColor(0xde3333)
        .setTitle('404')
        .setDescription('You are missing some arguments! Check out /help for more information.')
        message.channel.send(reportError)
    }else {
        const msgArgs = args.slice(0).join(" ");
        const channelReports = client.channels.cache.get('753844201212608542')

        const reportFiledS = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Report status:')
        .setDescription('Your report has been successfully filed! :upside_down:')
        message.channel.send(reportFiledS)
        message.delete()

        const reportData = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(message.author.username + '\'s Report:')
        .addField("ID:" , message.author.id)
        .setDescription(msgArgs)
        channelReports.send(reportData)
    }
  



    message.channel.stopTyping()
}

module.exports.help = {
    name: "reportBug",
    aliases: []
  }