const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()
    if (!args[0]) {
      var user = message.author.id;
      const reportError = new MessageEmbed()
        .setColor(0xde3333)
        .setTitle("404")
        .setDescription("Escriba La sugerencia Estamos feliz de escucharte");
      message.channel.send(reportError);
    } else {
      const msgArgs = arg.slice(0).join(" ");
      const channelReports = client.channels.cache.get("733499010849177612");

      const reportFiledS = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Sugerencia status:")
        .setDescription("La sugerencia se a enviado :3");
      message.channel.send(reportFiledS);
      message.delete()

      const reportData = new MessageEmbed()

        .setColor("RANDOM")
        .setTitle(message.author.username + "'s Sugerencia:")
        .addField("ID:", message.author.id, true)
        .setDescription(msgArgs);
      channelReports.send(reportData);
    }



    message.channel.stopTyping()
}

module.exports.help = {
    name: "sugerencia",
    aliases: []
  }