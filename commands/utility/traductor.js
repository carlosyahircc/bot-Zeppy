const {  MessageEmbed } = require("discord.js");
const translate = require("@vitalets/google-translate-api")

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    let lang = args[0];
let msg = args.slice(1).join(' ');

if (!lang) return message.channel.send(`Necesitas colocar a que idioma vas a traducir el texto (ingles)`);
if (!msg) return message.channel.send(`Necesitas colocar el mensaje a traducir`);
if(msg.length > 1300) return message.channel.send("No puedo traducir tanto")

translate(msg, {to: lang}).then(res => {
    const sa = new MessageEmbed()
    .setTitle("Traductor")
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/245px-Google_Translate_logo.svg.png")
    .setAuthor(message.author.username)
    .setTimestamp()
    .setColor("RANDOM")
    if (msg.length <= 2048) sa.setDescription(`**Idioma**: \n ${lang} \n **Mensaje traducido**: \n ${res.text}`)
    else { 
        let chunks = msg.match(/[\s\S]{1,1023}/g); 

        for (let chunk of chunks) embe.addField("\u200b", chunk, false);
    }
    if (sa.length > 6000) return message.reply("El mensaje es  demasiado largo Discord me pega si la mando :("); 
    message.channel.send(sa)
    }).catch(err => {
      message.channel.send("Error" + err)
    });


  

    message.channel.stopTyping()
}

module.exports.help = {
    name: "traductor",
    aliases: ["translator"]
  }