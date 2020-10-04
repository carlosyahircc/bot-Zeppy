const {  MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
    const aka = new MessageEmbed()
    .setTitle("<a:tuerka:748048198509002752>Mas comandos en construction")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .setThumbnail(client.user.displayAvatarURL())
    
    .addField(`Para ver La lista de comandos:`, "[Click aqui](https://zeppyweb.glitch.me/Comandos.html)", true)
    .addField(`<:verifi:761453639536607245>Server:`, "[Unete](https://discord.gg/Dj7zXen)")
    .addField(`<:tabienMipana:760554170636828762>Invita Al bot||`, "[Invite bot](https://discord.com/oauth2/authorize?client_id=725877650870239254&permissions=8537159744&scope=bot)")
    .addField(`/Ayuda ||`, "`Comandos para ayudar al bot `:new_moon_with_face: ")
    .setColor("RANDOM")
    message.channel.send(aka)
    



}
module.exports.help = {
    name: "help",
    aliases: []
  }