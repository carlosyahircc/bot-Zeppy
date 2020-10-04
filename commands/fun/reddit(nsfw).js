const {  MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if (message.channel.nsfw === true) {
        let tex = args.slice(0).join(" ");
        if(!tex) return message.channel.send("escribe algo para buscar")
        let reddit = [tex];
        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
  
        randomPuppy(subreddit)
          .then(async url => {
            await message.channel.send({
              files: [
                {
                  attachment: url,
                  name: "meme.png"
                }
              ]
            });
          })
          .catch(err => message.channel.send("Seguro que asi se llama?"));
      } else {
        message.channel.send("reddit es muy oscuro ;-; canal(nsfw)");
      }



    message.channel.stopTyping()
}

module.exports.help = {
    name: "reddit",
    aliases: []
  }