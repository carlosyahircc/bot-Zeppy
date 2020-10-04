const { MessageEmbed} = require("discord.js")

module.exports.run = async(client, message, args) => {
  if (!message.guild) return;
	    let permsBot = message.guild.me.hasPermission("BAN_MEMBERS") //Verificar permisos del bot
		if (!permsBot) return message.channel.send("X | No tengo permisos")
		let perms = message.member.hasPermission("BAN_MEMBERS") //Verificar permisos del usuario
    if (!perms)	return message.channel.send("X | No tienes permisos")

    
    
    let razon = args.slice(1).join(" ");
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      if(user.id === "725877650870239254") return message.channel.send("No me puedes banear unu")
      // Now we get the member from the user
      const member = message.guild.member(user);

      if (!razon) razon = "undefined"
      // If the member is in the guild
      if (member) {
        if (!member.bannable) return message.channel.send('No tengo permisos suficientes.');
        //you might also want to rename some of these messages
        if (member.id === message.author.id) return message.channel.send('eso no se puede !');
        if(member.roles.highest.comparePositionTo(message.member.roles.highest) >= 0){
          return message.channel.send("error: `DiscordAPIError: Missing Permissions`") 
          
          }
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */ //let log = db.get(`kanal_${message.guild.id}`)
        // if(log === null){
        member
          .ban({
            reason: razon
          })
          .then(() => {
            const ban = new MessageEmbed()

              .setTitle(":axe:BAN A UN USUARIO :axe:")
              .setThumbnail(user.displayAvatarURL({dynamic:true}))
              .setDescription(`El usuario:${user.tag} a sido baneado`)
              .addField("ID:", user.id, true)
              .addField("razon: \n", razon, true)
              .addField("Persona responsable: \n", message.author, true)
              .setTimestamp()
              .setFooter("ban >w<")
              .setColor("RANDOM");
            message.channel.send(ban);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply("no se pudo banear a la persona (es mas alto que tu rango ,)")
            // Log the error
            console.error(err);
          });
        // } else {
         /*    member
          .ban({
            reason: razon
          })
          .then(() => {
            const ban = new MessageEmbed()

              .setTitle(":axe:BAN A UN USUARIO :axe:")
              .setThumbnail(user.displayAvatarURL({dynamic:true}))
              .setDescription(`El usuario:${user.tag} a sido baneado`)
              .addField("ID:", user.id, true)
              .addField("razon: \n", razon, true)
              .addField("Persona responsable: \n", message.author, true)
              .setTimestamp()
              .setFooter("ban >w<")
              .setColor("RANDOM");
              message.channel.send("usuario baneado");
            return client.channels.cache.get(log).send(ban)
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply("no se pudo banear a la persona (es mas alto que tu rango ,)");
            // Log the error
            console.error(err);
          });
          */
             
       //  }
      } else {
        // The mentioned user isn't in this guild
        message.reply("El usuario no existe aqui");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("Necesitas mencionar a alguien");
    }
}
  

module.exports.help = {
  name: "ban",
  aliases: []
}