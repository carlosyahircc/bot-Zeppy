const {  MessageEmbed } = require("discord.js");
const ms = require("ms")
//const db = require("quick.db")


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()



    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]); //mención o ID del usuario para mutearlo
    if(!user) return message.channel.send("``❌``No mencionaste a ningún usuario.") //si no menciona o pone la ID de un usuario que haga un retorno
    if(!message.member.hasPermission("MUTE_MEMBERS", "BAN_MEMBERS", "KICK_MEMBERS")) //los permisos requeridos para ejecutar el comando
    return message.channel.send(message.author + ", No tienes los permisos `MUTE_MEMBERS, BAN_MEMBERS, KICK_MEMBERS❌`") //si no tiene los permisos retorna al usuario que ejecuto el comando

if(user.roles.highest.comparePositionTo(message.member.roles.highest) >= 0){
return message.channel.send("error: `DiscordAPIError: Missing Permissions`") 

}
const mutetiempo = new MessageEmbed()
  .setDescription(
    "No especificaste el tiempo | Formato: (1s (Segundo) | 1h (Hora) / 1d (Dia))"
  )
  .setColor("RED");
let mutetime = args[1];
if (!mutetime) return message.reply(mutetiempo); //para poner el tiempo del mute con el modulo ms

let razon = args.slice(2).join(" ") //definimos razón

const reason = new MessageEmbed()
  .setDescription("No has escrito una razón")
  .setColor("RED");
if (!razon) razon = "no hay" //si no escribio ninguna razón le retorna el embed

    let rol = message.guild.roles.cache.find(x => x.name === "muted")
    const highest = message.guild.me.roles.highest.position;

   
    if(!rol) { //Verificamos si el role existe y abrimos
        message.guild.roles.create({ //Creamos el role
        data: 
          { name: 'muted', //Especificamos el nombre del role
        color: 'BLACK',
        permissions: []
          }
        }).then(role => { //Recibimos la información del role
            message.guild.channels.cache.forEach(x => x.updateOverwrite(role.id, { //Utilizamos forEach para que ejecute esta acción por cada canal, vendr­a siendo un canal y utilizamos el metodo updateOverwrite para actualizar los permisos del role en cada canal 
            SEND_MESSAGES: false //Denegamos el permiso Enviar mensajes 
              }))
              role.setPosition(highest-1);
              user.roles.add(role.id) //Le añadimos el role al usuario
              
              })
              }else{ //Si el role existe abrimos
              user.roles.add(rol.id)
              }
             // let log = db.get(`kanal_${message.guild.id}`)
             // if(log === null){
    let embed = new MessageEmbed()
    .setTitle("🔇 Mute🔇")
    .addField('🙍Muteado:', user)
    //.setThumbnail(user.displayAvatarURL({dynamic:true}))
    .addField('💾ID💾:', user.id)
    .addField('🍴Persona responsable🍴:', message.author.tag)
    .addField('📰Razón📰:', razon, false)
    .addField(`⏲️Tiempo en ms⏲️`, `**${ms(mutetime)}**`)
    .setTimestamp()
    .setColor("RANDOM")

    setTimeout(function() { //cuando termina el tiempo del mute remueve el role
        user.roles.remove(rol);
        message.channel.send(`<@${user.id}> ha sido unmuteado del servidor.`);
      }, ms(mutetime));

    message.channel.send(embed)//envia el embed
            /*  } else {
                let embed = new MessageEmbed()
                .setTitle("🔇New Mute🔇")
                .addField('Mutead:', user, false)
                .addField('ID:', user.id, false)
                .addField('Persona responsable:', message.author.tag, false)
                .addField('Staff ID:', message.author.id, false)
                .addField('Razón:', razon, false)
                .addField(`Tiempo en ms`, `**${ms(mutetime)}**`, false)
                .setTimestamp()
                .setColor("RANDOM")
        
                setTimeout(function() { //cuando termina el tiempo del mute remueve el role
                    user.roles.remove(rol);
                    client.channels.cache.get(log).send(`<@${user.id}> ha sido unmuteado del servidor.`);
                  }, ms(mutetime));
                   client.channels.cache.get(log).send(embed)

              }
    
   


*/


    message.channel.stopTyping()
}

module.exports.help = {
    name: "tempmute",
    aliases: ["tempMute"]
  }