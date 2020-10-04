const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let text = args.slice(0).join(" ");
    if (!text) {
      return message.channel.send("Escribe algo plis ");
    }

    let pleaseWait = await message.channel.send("Espera un momento...");

    let embed = new MessageEmbed()
      .setImage(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.replace(
          new RegExp(" ", "g"),
          "%20"
        )}`
      )
      .setColor("RANDOM");

    message.channel.send(embed).then(() => pleaseWait.delete());


    message.channel.stopTyping()
}

module.exports.help = {
    name: "QR",
    aliases: ["qr"]
  }