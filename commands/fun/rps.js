const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


        // Condicionaremos que si el usuario no manda ningun argumento. O sea solo escribe el comando. *
        if(!args[0]) return message.channel.send("Opciones: `piedra`, `papel` o `tijera`").then(m => m.delete({timeout: 10000})) 
        //El .then() es opcional, yo siempre lo agrego porque me gusta.
        
        // Haremos una declaracion en matriz con las diferentes opciones ya dichas.
        let Options = ["piedra", "papel", "tijera"]
        try {
        // Condicionamos la matriz con el metodo .includes() que nos va a determinar si lo que mandamos esta dentro de la matriz, si es si no devolvera true sino false.
      if (args[0] === "piedra" || args[0] === "papel" || args[0] === "tijera"){
        
        //Ahora empezamos a obtener las cosas de la matriz y condicionamos..
        
        // Si args[0] es igual a "piedra" (if(args[0] == <piedra/papel/tijera>) {})
        if(args[0] == "piedra") {
      
          // Creamos una condicional de matriz que tendra las respuestas.
          let random1 = ["He ganado! Elegi papel", // Perdedor -jeje-
                         "Has ganado! Elegi tijera",  // Ganaste :D
                         "Empate!  Piedra"] // Empate ._.
                         var aleta = Math.floor(Math.random() * random1.length);
                         const ebe = new MessageEmbed()
                         .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
                         .setTitle("Piedra Papel o Tijeras")
                         .setDescription(random1[aleta])
                         .addField(`Elegiste`, `${args[0]}`,true)
                         .setColor("RANDOM")
                         .setTimestamp()
                         message.channel.send(ebe)
      
          
          
        } else if(args[0] == "papel") {
      
          let random2 = ["Has perdido! Elegi tijeras", // Perdedor -jeje-
                         "Has ganado! Elegi piedra",  // Ganaste :D
                         "Empate!  Elegi Papel"] // Empate ._.
                         var aleta1 = Math.floor(Math.random() * random2.length);
                         const ebe1 = new MessageEmbed()
                         .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
                         .setTitle("Piedra Papel o Tijeras")
                         .setDescription(random2[aleta1])
                         .addField(`Elegiste`, `${args[0]}`,true)
                         .setColor("RANDOM")
                         .setTimestamp()
                         message.channel.send(ebe1)
          
        } else if(args[0] == "tijera") {
              let random3 = ["He ganado! Elegi Piedra", // Perdedor -jeje-
                         "Has ganado! Elegi Papel",  // Ganaste :D
                         "Empate! Elegi tijera"] // Empate ._.
                         var aleta2 = Math.floor(Math.random() * random3.length);
                         const ebe3 = new MessageEmbed()
                         .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
                         .setTitle("Piedra Papel o Tijeras")
                         .setDescription(random3[aleta2])
                         .addField(`Elegiste`, `${args[0]}`,true)
                         .setColor("RANDOM")
                         .setTimestamp()
                         message.channel.send(ebe3)
        } 
      } else {
          message.channel.send(":x: Opcion incorrecta")
      } 
      } catch (error) {
                  message.channel.send("A ocurrido un error" + error)
              }
      

    message.channel.stopTyping()
}

module.exports.help = {
    name: "rps",
    aliases: []
  }