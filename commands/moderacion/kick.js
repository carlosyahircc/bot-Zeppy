const {  MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {


    let permsBot = message.guild.me.hasPermission("BAN_MEMBERS") 

    if (!permsBot) return message.channel.send("X | No tengo permisos")

    let perms = message.member.hasPermission("BAN_MEMBERS") 
    if (!perms)    return message.channel.send("X | No tienes permisos")
if (!message.guild) return;

let razon = args.slice(1).join(" ");
// Assuming we mention someone in the message, this will return the user
// Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
const user = message.mentions.users.first();
if(user.id === "725877650870239254") return message.channel.send("No me puedes banear unu")
// If we have a user mentioned
if (user) {
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
     * Kick the member
     * Make sure you run this on a member, not a user!
     * There are big differences between a user and a member
     */// let log = db.get(`kanal_${message.guild.id}`)
     //if(log === null){
    member
      .kick(razon)
      .then(() => {
        const kick = new MessageEmbed()

          .setTitle(":axe:KICK A UN USUARIO :axe:")
          .setThumbnail(user.displayAvatarURL({dynamic:true}))
          .setDescription(`El usuario:${user.tag} a sido Pateado`)
          .addField("ID:", user.id, true)
          .addField("razon: \n", razon, true)
          .addField("Persona responsable: \n", message.author, true)
          .setFooter("kick >w<")
          .setTimestamp()
          .setColor("RANDOM");
        message.channel.send(kick);
      })
      .catch(err => {
        // An error happened
        // This is generally due to the bot not being able to kick the member,
        // either due to missing permissions or role hierarchy
        message.reply("No pude patear al miembro error:" + "`" + err + "`");
        // Log the error
        console.error(err);
      });
    /* } else {
                 member
      .kick(razon)
      .then(() => {
        const kick = new MessageEmbed()

          .setTitle(":axe:KICK A UN USUARIO :axe:")
          .setThumbnail(user.displayAvatarURL({dynamic:true}))
          .setDescription(`El usuario:${user.tag} a sido Pateado`)
          .addField("ID:", user.id, true)
          .addField("razon: \n", razon, true)
          .addField("Persona responsable: \n", message.author, true)
          .setFooter("kick >w<")
          .setTimestamp()
          .setColor("RANDOM");
          message.channel.send("usuario pateado");
           return client.channels.cache.get(log).send(kick)
        
      })
      .catch(err => {
        // An error happened
        // This is generally due to the bot not being able to kick the member,
        // either due to missing permissions or role hierarchy
        message.reply("No pude patear al miembro");
        // Log the error
        console.error(err);
      });
         
     }
     */
  } else {
    // The mentioned user isn't in this guild
    message.reply("¡Ese usuario no está en esta aqui");
  }
  // Otherwise, if no user was mentioned
} else {
  message.reply("¡No mencionaste al usuario para patear!");
}



}
module.exports.help = {
    name: "kick",
    aliases: []
  }