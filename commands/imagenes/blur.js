const marsnpm = require("marsnpm");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    try{
        let user = message.mentions.users.first()
        if(!user){
        let img = await marsnpm.blur(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
    message.channel.send({files: [img]})
    
        } else {
            let img = await marsnpm.blur(user.displayAvatarURL({ dynamic: false, format: 'png' }))
    message.channel.send({files: [img]})
    
    
        }
            } catch (error) {
                message.channel.send("A ocurrido un error" + error)
            }
    


    message.channel.stopTyping()
}

module.exports.help = {
    name: "blur",
    aliases: []
  }