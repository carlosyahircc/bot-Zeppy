const {  MessageEmbed } = require("discord.js");
const math = require("math-expression-evaluator");

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

  
    const embed = new MessageEmbed()
  .setColor(`RANDOM`);
  
  if (!args[0]) {
    embed.setFooter("Por favor ingrese una `expresion` NUMERICA.");
    return await message.channel.send(embed); // Devuelve un mensaje si es que ejecuta el comando sin nada
  }
    if(isNaN(args[0])){
     embed.setFooter("Tiene que ser valor numerico no letras") 
       return await message.channel.send(embed)
      
      
    };
  let resultado;
  try {
    resultado = math.eval(args.join(" ")); // El Args toma el calculo
  } catch (e) {
    resultado = "error: "; // Cuando es incorrecta
  }
  embed.addField("Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``, false) // Te da el calculo
  .setTitle("📊 Calculadora")
  .addField("Salida", `\`\`\`js\n${resultado}\`\`\``, false);
  await message.channel.send(embed);
    
    


    message.channel.stopTyping()
}

module.exports.help = {
    name: "calculadora",
    aliases: ["calculate"]
  }