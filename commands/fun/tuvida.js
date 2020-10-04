const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    let nombra = message.author.username;
    var aleta = Math.round(Math.random() * 100);
    var deci = ["Si", "No"]
    var de1 = Math.floor(Math.random() * deci.length);
    var deci1 = ["Si", "No"]
    var de12 = Math.floor(Math.random() * deci1.length);
    var deci11 = ["Si", "No"]
    var de122 = Math.floor(Math.random() * deci11.length);
    var trabajo = ["Mcdonalds", "Anonymus", "Doctor", "Profugo de la justicia", "Policia", "Militar", "Bombero", "Prostitut@", "Nada", "Quimico", "Vendedor de Organos", "Taxista", "Hackerman"]
    var sele = Math.floor(Math.random() * trabajo.length);
    var riko = ["Si", "No"]
    var riko1 = Math.floor(Math.random() * riko.length);
    var kasa1 = ["Si", "No"]
    var kasa = Math.floor(Math.random() * kasa1.length);
    var deci111 = ["Si", "No"]
    var de1222 = Math.floor(Math.random() * deci111.length);
    var mori = ["asfixiado por un poto", "Ahogado", "durmiendo", "comiendo", "Escuela", "Bala", "Aliens", "Andar en el celular", "Explosion", "No se es muy dificil"]
    var morision = Math.floor(Math.random() * mori.length);
    var famo = ["Si", "No"]
    var famos = Math.floor(Math.random() * famo.length);
    var gua = ["Si", "No"]
    var guap = Math.floor(Math.random() * gua.length);
    

    
    const embed1 = new MessageEmbed()
    .setTitle("Tu vida en el futuro")
    .setColor("RANDOM")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
    .setThumbnail("https://esoterismos.com/wp-content/uploads/2010/09/crystal_ball_thumb.jpg")
    .addField("Nombre:",nombra, true )
    .addField("Moriras a los:",aleta, true )
    .addField("Tendras hijos:",deci[de1], true )
    .addField("¿Algun dia te casaras?:",deci1[de12], true )
    .addField("¿Te chupara el Diablo?",deci1[de122], true )
    .addField("Moriras virgen:",deci111[de1222], true )
    .addField("Trabajaras en:",trabajo[sele], true )
    .addField("Seras rico:",riko[riko1], true )
    .addField("Tendras la casa de tu sueños?",kasa1[kasa], true )
    .addField("Moriras:",mori[morision], true )
    .addField("¿Seras Famoso?",famo[famos], true )
    .addField("¿Seras Guapo?",gua[guap], true )



message.channel.send(embed1)

    message.channel.stopTyping()
}

module.exports.help = {
    name: "mylife",
    aliases: ["mivida"]
  }