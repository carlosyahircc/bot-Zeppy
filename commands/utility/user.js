const {  MessageEmbed } = require("discord.js");
const moment = require("moment")



module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    let user;

    if (!args[0]) {
      user = message.member;
    } else {


      user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => { return message.channel.send(":x: No encontre a la persona") })
    }

    if (!user) {
      return message.channel.send(":x: Persona invalida!")
    }


    //OPTIONS FOR STATUS

    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }

    //NOW BADGES
  



    let embed = new MessageEmbed()
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

    //ACTIVITY
    let array = []
    if (user.user.presence.activities.length) {

      let data = user.user.presence.activities;

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "None"
        let xname = data[i].details || "None"
        let zname = data[i].state || "None"
        let type = data[i].type

        array.push(`**${type}** : \`${name} : ${xname} : ${zname}\``)

        if (data[i].name === "Spotify") {
          embed.setThumbnail(`https://i.scdn.co/image/${data[i].assets.largeImage.replace("spotify:", "")}`)
        }

        embed.setDescription(array.join("\n"))

      }
    }
    message.channel.stopTyping()
      //EMBED COLOR BASED ON member
      embed.setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)

      //OTHER STUFF 
      embed.setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))
     
      //CHECK IF USER HAVE NICKNAME
      if (user.nickname !== null) embed.addField("Nickname", user.nickname)
      embed.addField(" <:discord:314003252830011395>Se unio", moment(user.user.joinedAt).format("LLLL"))
        .addField("<:discord:314003252830011395> Cuenta creada", moment(user.user.createdAt).format("LLLL"))
        .addField("Informacion comun", `<:mention:658538492019867683> ID: \`${user.user.id}\`\n <:channel:585783907841212418>Discriminator: ${user.user.discriminator}\nBot: ${user.user.bot}\n <:discord:314003252830011395>Usuario borrado: ${user.deleted}`)
        
        .setFooter(user.user.presence.status, stat[user.user.presence.status])



      return message.channel.send(embed).catch(err => {
        return message.channel.send("Error : " + err)
      })
      


    
}

module.exports.help = {
    name: "user",
    aliases: []
  }