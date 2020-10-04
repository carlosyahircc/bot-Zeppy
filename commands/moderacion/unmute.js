const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


	let permsBot = message.guild.me.hasPermission("MANAGE_ROLES") //Verificar permisos del bot
		if (!permsBot) return message.channel.send("X | No tengo permisos")

		let perms = message.member.hasPermission("MANAGE_ROLES") //Verificar permisos del usuario
		if (!perms)	return message.channel.send("X | No tienes permisos")

        let person = message.guild.member(message.mentions.users.first());
        if(person){
        
            try{
        let role = message.guild.roles.cache.find(role => role.name === "muted");
          if(!role) return message.channel.send("No se encontro muteado al usuario");
          
        person.roles.remove(role.id)
          } catch (err) {
            message.channel.send("Se produjo un error" + err)
          }
        let reason = args.slice(0).join(" ")

       // let log = db.get(`kanal_${message.guild.id}`)
        
       // if(log === null){
            
            
        const embed = new MessageEmbed()
.setTitle('🔊UnMute🔊:')
.setDescription(`💽Razon💽:` ,`${reason}`)
.setAuthor(message.member.displayName)
.setColor('RANDOM')
.setThumbnail(person.user.avatarURL())
.addFields({
    name: '🙍Member',
    value: person.toString()
}, {
    name: '<a:loading:393852367751086090>Member ID',
    value: person.id
})
.setTimestamp();
message.channel.send(embed);
/*} else {
            const embed = new MessageEmbed()
.setTitle('`UnMute:`')
.setDescription(`Razon:\` \`${reason}\``)
.setAuthor(message.member.displayName)
.setColor('RANDOM')
.setThumbnail(person.user.avatarURL())
.addFields({
    name: 'Member',
    value: person.toString(),
    inline: true
}, {
    name: 'Member ID',
    value: person.id,
    inline: true
})
.setTimestamp();
message.channel.send("usuario desmuteado")
return client.channels.cache.get(log).send(embed)
    
}
*/






  } else {
      message.channel.send("Debes mencionar a un miembro")
  }





}
module.exports.help = {
    name: "unmute",
    aliases: ["desmutear"]
  }