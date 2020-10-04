const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {



    message.channel.startTyping()
    let person = message.guild.member(message.mentions.users.first());
    if(person){
    let reason = args.slice(1).join(" ")
    let permsBot = message.guild.me.hasPermission("MANAGE_ROLES") //Verificar permisos del bot
		if (!permsBot) return message.channel.send("X | No tengo permisos")
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Te faltan permisos")
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Te faltan permisos")
    if(person.roles.highest.comparePositionTo(message.member.roles.highest) >= 0){
      return message.channel.send("No tienes los permisos porque tu rol no es superior al mencionado`") 
  
  }
  
  
  if(person.id === message.author.id) return message.channel.send("Que tratas de hacer??")
  if(person.id === "725877650870239254") return message.channel.send("No me puedes mutear")
      let role = message.guild.roles.cache.find(role => role.name === "muted");
      const highest = message.guild.me.roles.highest.position;

  if(!role){
      message.guild.roles.create({
          data: {
            name: 'muted',
            hoist: true,
            permissions: []
        
          },
          reason: 'fue creado porque no habia',
        }).then(role => { //Recibimos la información del role
                  message.guild.channels.cache.forEach(x => x.updateOverwrite(role.id, { //Utilizamos forEach para que ejecute esta acción por cada canal, vendr­a siendo un canal y utilizamos el metodo updateOverwrite para actualizar los permisos del role en cada canal 
                  SEND_MESSAGES: false //Denegamos el permiso Enviar mensajes 
                    }))
                    role.setPosition(highest-1);
  
                    person.roles.add(role.id) //Le añadimos el role al usuario
                    
                    })
        message.channel.send("Se creo el rol de muted porque no lo encontre")
  } else {
    person.roles.add(role.id)
  }
  
  //let log = db.get(`kanal_${message.guild.id}`)
  //if(log === null){
      if(!reason) reason = "no hay"
  const embed = new MessageEmbed()
  .setTitle('🔇 Mute 🔇')
  .addField(`💽Razon:`, reason)
  .setAuthor(message.member.displayName,  message.author.displayAvatarURL({dynamic:true}))
  .setColor('RANDOM')
  .setThumbnail(person.user.avatarURL())
  .addFields({
      name: ' 🙍 Member',
      value: person.toString()
    
  }, {
      name: '<a:loading:393852367751086090>Member ID',
      value: person.id
      
  })
  .setTimestamp();
  message.channel.send(embed);
  
  
  return undefined

  
  
  /*} else {
      const embed = new MessageEmbed()
  .setTitle('`Mute:`')
  .setDescription(`\`Razon:\` \`${reason}\``)
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
  message.channel.send("Usuario muteado")
  client.channels.cache.get(log).send(embed)
  
  let role1 = message.guild.roles.cache.find(role => role.name === "muted");
      try{
  person.roles.add(role1.id)
      } catch (err) {
        message.channel.send("se produjo un error" + err)
      }
  
  return undefined
  
  
      
    */ 
  
  
  
  
  
  
  
  
    } else {
        message.channel.send("Debes mencionar a un miembro")
    }
  
  
  




    message.channel.stopTyping()
    
}

module.exports.help = {
    name: "mute",
    aliases: []
  }