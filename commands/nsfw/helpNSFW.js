const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    if (message.channel.nsfw === true) {
		const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle("Comandos prohibidos")
      .setFooter("Los que tengan alado un (i) son interactivos")
      .setColor("RANDOM")
      .setDescription(
        "__**:mag:Busqueda:mag:**__ \n __**r34**__  __**konachan**__  __**gelbooru**__ __**nhentai**__\n :no_entry_sign::no_entry_sign:  \n ```anal(i)  boobs  yuri  \n neko  random  blowjob \n ero  lesbian  nekogif \n pussy  kuni(i)  cumslut \n classic  suck(i)  tits \n eroneko  kemonomimi  kitsune \n holo  trap  \n keta  futurani girlsolo \n feet  eroKitsune  eroKemonomimi \n spank  gasm  panties  \n orgy  ass  maid \n doujin  femdom  cum(i) \n bdsm  wallpaperTLnsfw  wallpaperPCnsfw \n lewdneko  loli  netorare  \n fuck(solo i)  feetgif  hentai ```"
      );
    message.channel.send(embed);
      } else {
        message.channel.send("Esto no es un canal nsfw")
      }

    message.channel.stopTyping()
}

module.exports.help = {
    name: "nsfw",
    aliases: []
  }