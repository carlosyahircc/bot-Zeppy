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

    if (!person) return message.channel.send('Modo de uso!  /softban (usuario) + (razon) opcional!');
    if (!person.bannable) return message.channel.send('No puedes temban a esa persona.');
    if(person.roles.highest.comparePositionTo(message.member.roles.highest) >= 0){
        return message.channel.send("error: `DiscordAPIError: Missing Permissions`") 
        
        }
    //you might also want to rename some of these messages
    if (person.id === message.author.id) return message.channel.send('eso no se puede !');
    if(person.id === "725877650870239254") return message.channel.send("No me peudes banear unu")
    
    let reason = 'no hay';
    if (args[1]) reason = args.splice(1).join(" ");



    person.ban({
        reason: reason,
        //and we need to add the time into here!
    })
  //  let log = db.get(`kanal_${guild.id}`)
   // if(log === null){
    //all we have left for tempban is to change the embed
    const embed = new MessageEmbed()
        .setTitle('✂️Softban✂️')
        .addField("⏲️Tiempo⏲️:", "1 dias")
        .addField("📰Razon📰: ", reason)
        .setAuthor(message.member.displayName, message.author.displayAvatarURL({dynamic:true}))
        .setColor('RANDOM')
        .setThumbnail(person.user.displayAvatarURL({dynamic:true}))
          .addField("🍴Persona responsable🍴: \n", message.author, true)
        .addFields({
            name: ' 🙍Member',
            value: person.toString(),
            inline: true
        }, {
            name: '<a:loading:393852367751086090>Member ID',
            value: person.id,
            inline: true
        })
        .setTimestamp();
        
    message.channel.send(embed);
    try{
    setTimeout(function() { //cuando termina el tiempo del mute remueve el role
        message.guild.members.unban(person.id)
        message.channel.send(`<@${person.id}> ha sido desbaneado del servidor.`);
      }, ms("20d"));
    } catch (err) {
        message.channel.send("Oh no, ah ocurrido un error" + err)
    }
   /* } else {
                const embed = new MessageEmbed()
                .setTitle('`Softban:`')
        .setDescription(`\`Tiempo:\` \`1 dias:\`, \`Razon:\` \`${reason}\``)
        .setAuthor(message.member.displayName)
        .setColor('RANDOM')
        .setThumbnail(user.displayAvatarURL({dynamic:true}))
          .addField("Persona responsable: \n", message.author, true)
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
        
    client.channels.cache.get(log).send(embed);
    try{
    setTimeout(function() { //cuando termina el tiempo del mute remueve el role
        message.guild.members.unban(person.id)
       client.channels.cache.get(log).send(`<@${person.id}> ha sido desbaneado del servidor.`);
      }, ms("1d"));
    } catch (err) {
        message.channel.send("Oh no, ah ocurrido un error" + err)
    }
        
        
    }
    //next is the kick command!

*/




    message.channel.stopTyping()
}

module.exports.help = {
    name: "softban",
    aliases: []
  }