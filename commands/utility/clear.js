const {  MessageEmbed } = require("discord.js");
module.exports.run = async(client, message, args) => {
    let permsBot = message.guild.me.hasPermission("MANAGE_MESSAGES") //Verificar permisos del bot
    if (!permsBot) return message.channel.send("X | No tengo permisos")
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Tu no tienes permiso");

  if (!args[0]) return message.channel.send("Ingresa el numero de mensages a eliminar." );
    if(!parseInt(args[0])) return message.channel.send("Deben de ser numeros")
    if(args[0] >= 100) return message.channel.send("Solo se pueden eliminar 100 mensajes")
  message.channel.bulkDelete(args[0]).then;
  {
    const e2 = new MessageEmbed()
      .setTitle(":envelope:Limpieza echa :envelope:")
      .setDescription(`Los mensajes se han borrado. Cantidad ${args[0]}`)
      .addField("Persona responsable: \n", message.author, true)
      .setFooter("Succefully Deleted")
      .setTimestamp()
      .setColor("RANDOM");

    message.channel.send(e2).then(m => m.delete({timeout: 5000}))
  }


return

}
module.exports.help = {
    name: "clear",
    aliases: ["purge"]
  }