const {  MessageEmbed } = require("discord.js");
const ms = require("ms")
//const db = require("quick.db")

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let permsBot = message.guild.me.hasPermission("BAN_MEMBERS") 

    if (!permsBot) return message.channel.send("X | No tengo permisos")

    let perms = message.member.hasPermission("BAN_MEMBERS") 
    if (!perms)    return message.channel.send("X | No tienes permisos")
let person = message.guild.member(message.mentions.users.first());

    //the first thing we are going to add is a time variable, let's start by assuming it is args[2]
    let time = args[1];
    if (!person) return message.channel.send('Menciona a un miembro!');
if(person.roles.highest.comparePositionTo(message.member.roles.highest) >= 0){
return message.channel.send("error: `DiscordAPIError: Missing Permissions`") 

}
    if (!person.bannable) return message.channel.send('No tengo permisos suficientes.');
    //you might also want to rename some of these messages
    if (person.id === message.author.id) return message.channel.send('eso no se puede !');
    if(person.id === "725877650870239254") return message.channel.send("No me puedes banear unu")
    //now we are going to mess withajhsjajs it in here.
    //This checks if it exists.
    if (!time) return message.channel.send(' No especificaste el tiempo | Formato: (1s (Segundo) | 1h (Hora) / 1d (Dia))');
    //now we are going to check if it is a number!
    
    //now we are going to parseFloat that into a number if we have gotten this far, (parseFloat converts a string into a number)
    //that is all we have to change up here.
    let reason = 'no hay';
    if (args[2]) reason = args.splice(2).join(" ");

    person.ban({
        reason: reason,
        //and we need to add the time into here!
        time: time
    })
    //all we have left for tempban is to change the embed
   // let log = db.get(`kanal_${guild.id}`)
   // if(log === null){
    const embed = new MessageEmbed()
        .setTitle('✂️Tempban✂️:')
        .addField("⏲️Tiempo⏲️:", `${time} en ms`)
        .addField(`📰Razon📰:`, reason)
        .setAuthor(message.member.displayName, message.author.displayAvatarURL({dynamic:true}))
        .setColor('RANDOM')
        .setThumbnail(person.user.avatarURL({dynamic:true}))
        .addFields({
            name: '🙍Member',
            value: person.toString(),
            inline: true
        }, {
            name: '<a:loading:393852367751086090>Member ID',
            value: person.id,
            inline: true
        })
        .setTimestamp();
try{

      setTimeout(function() { //cuando termina el tiempo del mute remueve el role
        message.guild.members.unban(person.id)
        message.channel.send(`<@${person.id}> ha sido desbaneado del servidor.`);
      }, ms(time));
    //next is the kick command!
message.channel.send(embed);
} catch (err) {
message.channel.send("Oh no, ah ocurrido un error" + err)
}
/*}else {
        const embed = new MessageEmbed()
        .setTitle('`Tempban:`')
        .setDescription(`\`Tiempo:\` \`Tiempo: ${time} en ms :\`, \`Razon:\` \`${reason}\``)
        .setThumbnail(user.displayAvatarURL({dynamic:true}))
          .addField("Persona responsable: \n", message.author, true)
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
try{

      setTimeout(function() { //cuando termina el tiempo del mute remueve el role
        message.guild.members.unban(person.id)
        client.channels.cache.get(log).send(`<@${person.id}> ha sido desbaneado del servidor.`);
      }, ms(time));
    //next is the kick command!
client.channels.cache.get(log).send(embed);
} catch (err) {
message.channel.send("Oh no, ah ocurrido un error" + err)
}


}

*/



    message.channel.stopTyping()
}

module.exports.help = {
    name: "tempban",
    aliases: ["tempBan"]
  }