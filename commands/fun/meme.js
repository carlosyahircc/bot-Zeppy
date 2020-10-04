const {  MessageEmbed } = require("discord.js");
const { meme } = require("memejs")

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()
    let memes = ["MemesESP", "spanishmemes", "SpanishMeme", "mexico", "MemesEnEspanol"]//variable para subreddits esto es para ampliar mas los memes
    let random = Math.floor(Math.random() * memes.length)/*pos hacemos random la variable meme*/
    meme(memes[random], function (err, data) {
        if (err) {
            console.error(err)
            message.channel.send('Hubo un error al tratar de buscar memes, perdon ;-; ')//por si hay error
                .then(m => m.delete({ timeout: 10000 }))
            message.channel.stopTyping()
            return
        }
        message.channel.send(data.title, { files: [data.url] })
            .catch(err => {//por si hay otro error
                message.channel.send('Hubo un error al tratar de buscar memes, perdon ;-;')
                    .then(m => m.delete({ timeout: 10000 }))
                message.channel.stopTyping()
                return
            })
    })
    message.channel.stopTyping()


    

}

module.exports.help = {
    name: "meme",
    aliases: []
  }