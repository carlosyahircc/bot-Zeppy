module.exports.run = async(client, message, args) => {
    message.delete();
    let texto = args.join(" ");
    if (!texto) return message.channel.send(`Escriba un contenido pára decir.`);
    message.channel.send(texto, {allowedMentions: {parse: []}});
    




}
module.exports.help = {
    name: "say",
    aliases: ["decir"]
  }