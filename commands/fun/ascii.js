

const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    try{
    
        let texto = args.join(" "); 
        console.log(texto)
  if(!texto) return message.channel.send("Agrega algo para convertirlo en ascii. (Máximo 20 carácteres)")
  if(texto.length > 20) return message.channel.send("Solo se permite hasta 20 carácteres.")
  let letras = await figletAsync(texto); 
  message.channel.send("```"+letras+"```"); 
	    } catch (error) {
	        message.channel.send("A ocurrido un error" + error)
	    }



    message.channel.stopTyping()
}

module.exports.help = {
    name: "ascii",
    aliases: []
  }