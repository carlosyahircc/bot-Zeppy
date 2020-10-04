const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    var server = message.guild;
    console.log(server.description)
    
const voicE = message.guild.channels.cache.filter(c => c.type === 'voice').size;
    const ea = new MessageEmbed()
      .setThumbnail(server.iconURL())
      .setAuthor(server.name, server.iconURL())
      .addField("<:settings:585767366743293952> `>ID:`", server.id, true)
    .addField("<:booster4:585764446178246657> `>boost:`", server.premiumSubscriptionCount, true)
    
    .addField("<:channel:585783907841212418> `>Canales:`", server.channels.cache.size, true)
    .addField("<:booster:585764032162562058> `>Nivel:`", server.premiumTier, true)
    .addField("<:voice_locked:585783907488628797> `>Canal AFK:`", server.afkChannel, true)
     .addField("<:settings:585767366743293952> `>Descripcion del server:`", server.description, true)
    .addField("<:emoji_ghost:658538492321595393> `>Emotes:`", server.emojis.cache.size, true)
    .addField("<:verified:585790522677919749> `>Verificacion`", server.verificationLevel, true)
    .addField(" <:voice:585783907673440266> `>Canales de Voz (Activos)`", server.voiceStates.cache.size, true)
      .addField("<a:updating:403035325242540032> `>Region`", server.region, true)
    .addField(" <:voice:585783907673440266> >Canales de voz", voicE, true)
      .addField(" <:staff:314068430787706880> `>Creado el:`", server.joinedAt.toDateString(), true)
        .addField(
      "`En línea:`",
      `:green_circle: ${
        message.guild.members.cache.filter(o => o.presence.status === "online").size
      } En línea`, true
    )
    .addField(
      "`Desconectado:`",
      `:white_circle: ${
        message.guild.members.cache.filter(o => o.presence.status === "offline").size
      } Desconectado`, true
    )
    .addField(
      "`No molestar:`",
      `:no_entry: ${
        message.guild.members.cache.filter(o => o.presence.status === "dnd").size
      } No molestar`, true
    )
    .addField(
      "Ausente:`",
      `:yellow_circle: ${
        message.guild.members.cache.filter(o => o.presence.status === "idle").size
      } Ausente`, true
    )
    .addField(
      "`Bots:`",
      `:space_invader: ${
       message.guild.members.cache.filter(m => m.user.bot).size
      } Bots`,true
    )
    
    .addField("`Humanos:`",
    `:bust_in_silhouette: ${
      message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size
    } Humanos`, true)
    .addField(
      "`Total:`",
      `:busts_in_silhouette: ${
        message.guild.memberCount
      } Total`, true
    )
      .addField(
         "  <:owner:585789630800986114> `>Dueño del Servidor`",
        server.owner.user.username +
          "#" +
          server.owner.user.discriminator +
          " (" +
          server.owner.user.id +
          ")",
        true
      )
    .addField(" <:settings:585767366743293952> `>Roles`", server.roles.cache.size, true)
      
      .setColor("RANDOM");
      message.channel.stopTyping()
    message.channel.send(ea);


    
}

module.exports.help = {
    name: "server",
    aliases: ["infoserver"]
  }