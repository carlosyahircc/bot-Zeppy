const {  MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const fetch = require('node-fetch')
const querystring = require('querystring')

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    const searchString = querystring.stringify({ term: args.slice(0).join(" ") })

    if (!args.slice(0).join(" ")) return message.channel.send(new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Que quieres buscar?`)
    )
    try{

    const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${searchString}`).then(response => response.json())

    try {
        const [answer] = list

        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)

        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addFields(
                { name: 'Definicion', value: trim(answer.definition, 1024) },
                { name: 'Ejemplo', value: trim(answer.example, 1024) },
                { name: 'Rankind', value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎.` },
            )
        message.channel.send(embed)
    } catch (error) {
        console.log(error)
        return message.channel.send(new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription(`No encontre resultados de  **${arg.slice(1).join(" ")}**`)
        )
    }

} catch (error) {
        message.channel.send("A ocurrido un error" + error)
    }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "urban",
    aliases: ["diccionario"]
  }