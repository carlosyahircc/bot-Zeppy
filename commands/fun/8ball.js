const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {

    let texto = args.join(" ");
    var rpts = [
      "Sí",
      "No",
      "¿Por qué?",
      "Por favor",
      "Tal vez",
      "No sé",
      "Definitivamente?",
      " ¡Claro! ",
      " Sí ",
      " No ",
      " Por supuesto! ",
      " Por supuesto que no "
    ];
    if (!texto) return message.channel.send(`Escribe una pregunta >w<.`);
    message.channel.startTyping()
    message.channel.send(
      "` mi respuesta es: `" +
        rpts[Math.floor(Math.random() * rpts.length)] +
        "`"
    );


    message.channel.stopTyping()
    }
module.exports.help = {
    name: "8ball",
    aliases: []
  }