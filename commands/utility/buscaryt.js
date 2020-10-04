const Discord = require("discord.js");
const ytsr = require("ytsr");



module.exports.run = async(client, message, args) => {
    if (message.channel.nsfw === true) {

        let tex = args.slice(0).join(" ")
    if(!tex) return message.channel.send("Ingresa lo que quieres buscar")
        try {
          message.channel.startTyping();
          let filter1;
    
          //Vamos a separar por tipo "Video", para eso se usa:
          const filters = await ytsr.getFilters(args.slice(0).join(" "));
    
          //Ejemplo de salida de filtros: https://github.com/TimeForANinja/node-ytsr/blob/master/example/example_filters_output
          filter1 = filters.get("Type").find(o => o.name === "Video");
          let options = {
            limit: 50,
            nextpageRef: filter1.ref
          };
    
          //Con las opciones puestas, hacer la búsqueda
          const searchResults = await ytsr(null, options);
    
          //Para este ejemplo usaré createReactionCollector, pero ahora que sabes como hacer la búsqueda, puedes implementar ytsr a cualquier lugar
          let i = 0;
          let max = searchResults.items.length - 1;
    
          //Todas las opciones, puedes ver ejemplo de salida aquí: https://github.com/TimeForANinja/node-ytsr/blob/master/example/example_search_output
          const embed = new Discord.MessageEmbed()
            .setTitle(searchResults.items[i].title)
            .setURL(searchResults.items[i].link)
            .setDescription(
              searchResults.items[i].description || "Without description"
            )
            .addField(
              "Channel",
              `[${searchResults.items[i].author.name}](${searchResults.items[i].author.ref})`,
              true
            )
            .addField("Duration", searchResults.items[i].duration, true)
            .addField("Views", searchResults.items[i].views, true)
            .addField("Uploaded at", searchResults.items[i].uploaded_at, true)
            .setFooter(`YouTube search: ${i + 1}/${max + 1}`)
            .setImage(searchResults.items[i].thumbnail)
            .setColor("RED");
    
          const filter = (reaction, user) => {
            return (
              ["◀️", "▶️", "⏹️"].includes(reaction.emoji.name) &&
              user.id === message.author.id
            );
          };
          let msg = await message.channel.send(embed);
          await msg.react("◀️");
          await msg.react("▶️");
          await msg.react("⏹️");
          message.channel.stopTyping();
          let collector = msg.createReactionCollector(filter, { idle: 20000 });
          collector.on("collect", async (reaction, user) => {
            if (reaction.emoji.name === "▶️") {
              await reaction.users.remove(user.id);
              if (max !== i) {
                i++;
                embed
                  .spliceFields(0, 4)
                  .setTitle(searchResults.items[i].title)
                  .setURL(searchResults.items[i].link)
                  .setDescription(
                    searchResults.items[i].description || "Without description"
                  )
                  .addField(
                    "Channel",
                    `[${searchResults.items[i].author.name}](${searchResults.items[i].author.ref})`,
                    true
                  )
                  .addField("Duration", searchResults.items[i].duration, true)
                  .addField("Views", searchResults.items[i].views, true)
                  .addField("Uploaded at", searchResults.items[i].uploaded_at, true)
                  .setFooter(`YouTube search: ${i + 1}/${max + 1}`)
                  .setImage(searchResults.items[i].thumbnail);
                await msg.edit(embed);
              }
            }
            if (reaction.emoji.name === "◀️") {
              await reaction.users.remove(user.id);
              if (i !== 0) {
                i--;
                embed
                  .spliceFields(0, 4)
                  .setTitle(searchResults.items[i].title)
                  .setURL(searchResults.items[i].link)
                  .setDescription(
                    searchResults.items[i].description || "Without description"
                  )
                  .addField(
                    "Channel",
                    `[${searchResults.items[i].author.name}](${searchResults.items[i].author.ref})`,
                    true
                  )
                  .addField("Duration", searchResults.items[i].duration, true)
                  .addField("Views", searchResults.items[i].views, true)
                  .addField("Uploaded at", searchResults.items[i].uploaded_at, true)
                  .setFooter(`YouTube search: ${i + 1}/${max + 1}`)
                  .setImage(searchResults.items[i].thumbnail);
                await msg.edit(embed);
              }
            }
            if (reaction.emoji.name === "⏹️") {
              collector.stop();
            }
          });
          collector.on("end", collected => msg.reactions.removeAll());
        } catch (err) {
          message.channel.stopTyping();
          message.channel.send("error ;-; : " + err);
        }
      } else {
        message.channel.send("Canal nsfw (me obligaron ;-;)")
      }


}

module.exports.help = {
    name: "searchyt",
    aliases: ["buscaryt"]
  }